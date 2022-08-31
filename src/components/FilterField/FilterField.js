import { stack, year } from "./filterFieldData";
import Select from "./Select";
import Input from "./Input";
import React from "react";
import PropTypes from "prop-types";

export default function FilterField(props) {
  return (
    <div className="filter-field">
      <Input
        stateFunc={ props.setTitleFilter }
        labelText="Поиск по названию: "
      />
      <Input
        stateFunc={ props.setAuthorFilter }
        labelText="Поиск по автору: "
      />
      <Select
        data={ stack }
        stateFunc={ props.setStackFilter }
        labelText="Поиск по технологическому стэку: "
      />
      <Select
        data={ year }
        stateFunc={ props.setYearFilter }
        labelText="Поиск по году издания: "
      />
    </div>
  );
}

FilterField.propTypes = {
  setStackFilter: PropTypes.func,
  setYearFilter: PropTypes.func,
  setTitleFilter: PropTypes.func,
  setAuthorFilter: PropTypes.func
};
