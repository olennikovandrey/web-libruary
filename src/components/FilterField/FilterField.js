import { stack, year } from "./filterFieldData";
import FilterFieldSelect from "../FilterFieldSelect/FilterFieldSelect";
import React from "react";
import PropTypes from "prop-types";

export default function FilterField(props) {
  return (
    <div className="filter-field">
      <label>
        Поиск по названию:
        <input type="text" onChange={ (event) => props.setTitleFilter(event.target.value) } />
      </label>
      <label>
        Поиск по автору:
        <input type="text" onChange={ (event) => props.setAuthorFilter(event.target.value) } />
      </label>
      <label>
        Поиск по технологическому стэку:
        <FilterFieldSelect
          data={ stack }
          stateFunc={ props.setStackFilter }
        />
      </label>
      <label>
        Поиск по году издания:
        <FilterFieldSelect
          data={ year }
          stateFunc={ props.setYearFilter }
        />
      </label>
    </div>
  );
}

FilterField.propTypes = {
  setStackFilter: PropTypes.func,
  setYearFilter: PropTypes.func,
  setTitleFilter: PropTypes.func,
  setAuthorFilter: PropTypes.func
};
