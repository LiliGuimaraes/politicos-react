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

import React from "react";
import PropTypes from "prop-types";

import AsyncSelect from "react-select/lib/Async";

export const getOptionsCallback = (input, callback, opts) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(opts);
    }, 1000);
  });

const Multiselect = ({
  label,
  placeholder,
  value,
  loadOptions,
  onChange,
  onInputChange
}) => {
  return (
    <div>
      <h4>{label}</h4>
      <AsyncSelect
        isMulti
        defaultOptions
        cacheOptions
        placeholder={placeholder}
        value={value}
        loadOptions={loadOptions}
        onChange={onChange}
        onInputChange={onInputChange}
      />
    </div>
  );
};

Multiselect.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.array,
  loadOptions: PropTypes.func,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func
};

export default Multiselect;
