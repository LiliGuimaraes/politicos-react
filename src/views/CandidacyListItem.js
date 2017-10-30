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

import React from 'react'
import PropTypes from 'prop-types'

const CandidacyListItem = ({ candidacy }) => {
  const status = candidacy.elected ? 'Eleito' : 'Não eleito'
  const round_number = candidacy.election_round.round_number

  let info = ''
  if (candidacy.city && candidacy.state) {
    info = 'em ' + candidacy.city.name + '/' + candidacy.state.siglum
  } else if (candidacy.state) {
    info = 'em ' + candidacy.state.name
  }

  return (
    <div className="candidacy-list-item">
      {status} no {round_number}&deg; turno para{' '}
      {candidacy.political_office.name} {info}
    </div>
  )
}

CandidacyListItem.propTypes = {
  candidacy: PropTypes.object,
}

export default CandidacyListItem
