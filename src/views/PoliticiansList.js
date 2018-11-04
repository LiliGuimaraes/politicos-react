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

import { Scrollbars } from 'react-custom-scrollbars'
import { List } from 'material-ui'

import PoliticiansListItem from './PoliticiansListItem'
import { changePoliticiansList } from '../select/politiciansDuck'
import Loading from '../components/Loading'

export class PoliticiansList extends Component {
  componentDidMount() {
    this.props.HTTPClient.get('/politicians/').then(politicians => {
      this.props.dispatch(changePoliticiansList(politicians.data))
    })
  }

  render() {
    if (!this.props.data) {
      return (
        <List style={{ paddingTop: 70, marginRight: 400 }}>
          <Loading />
        </List>
      )
    }

    const politicianItems = this.props.data.map(politician => {
      return (
        <PoliticiansListItem
          onPoliticianSelect={this.props.onPoliticianSelect}
          key={politician.id}
          politician={politician}
        />
      )
    })

    return (
      <List
        style={{
          padding: 0,
          marginRight: 400,
          overflow: 'auto',
          height: '700px', // FIXME
          paddingTop: 66,
        }}
      >
        <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
          {politicianItems}
        </Scrollbars>
      </List>
    )
  }
}

/* istanbul ignore next */
const mapStateToProps = ({ politicians }) => {
  return {
    data: politicians.objects,
  }
}

PoliticiansList.propTypes = {
  data: PropTypes.array,
  dispatch: PropTypes.func,
  onPoliticianSelect: PropTypes.func,
  HTTPClient: PropTypes.object,
}

export default connect(mapStateToProps)(PoliticiansList)
