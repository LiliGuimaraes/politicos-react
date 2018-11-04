/*
 * Copyright (c) 2016, Marcelo Jorge Vieira <metal@alucinados.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Drawer, Button } from 'material-ui'

import {
  changePoliticiansList,
  resetPoliticiansList,
} from '../select/politiciansDuck'
import {
  SelectCity,
  SelectEducation,
  SelectElected,
  SelectElection,
  SelectGender,
  SelectMaritalStatus,
  SelectOccupation,
  SelectPoliticalOffice,
  SelectPoliticalParty,
  SelectPolitician,
  SelectState,
} from '../select'

export class Filters extends Component {
  onChangeQuery() {
    const state = this.props.state
    let queryString = new URLSearchParams()

    // FIXME: only select component
    Object.keys(state).map(objectKey => {
      const obj = state[objectKey]
      if (!obj.selected) {
        return
      }
      obj.selected.map(item => {
        return queryString.set(obj.query, item.value)
      })
    })

    if (queryString.toString() == '') {
      return
    }

    this.props.dispatch(resetPoliticiansList())

    this.props.HTTPClient.get('/politicians?' + queryString.toString()).then(
      result => {
        this.props.dispatch(changePoliticiansList(result.data))
      }
    )
  }

  render() {
    return (
      <Drawer open type="permanent" anchor="right">
        <div style={{ width: 340, margin: '64px 24px', paddingBottom: 72 }}>
          <SelectPolitician {...this.props} />
          <SelectPoliticalParty {...this.props} />
          <SelectPoliticalOffice {...this.props} />
          <SelectEducation {...this.props} />
          <SelectElection {...this.props} />
          <SelectState {...this.props} />
          <SelectCity {...this.props} />
          <SelectElected {...this.props} />
          <SelectGender {...this.props} />
          <SelectOccupation {...this.props} />
          <SelectMaritalStatus {...this.props} />
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            background: '#eee',
            padding: 24,
            width: '100%',
          }}
        >
          <Button
            raised
            color="primary"
            onClick={this.onChangeQuery.bind(this)}
          >
            Filtrar
          </Button>
        </div>
      </Drawer>
    )
  }
}

/* istanbul ignore next */
const mapStateToProps = state => {
  return {
    state,
  }
}

Filters.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
  HTTPClient: PropTypes.object,
}

export default connect(mapStateToProps)(Filters)
