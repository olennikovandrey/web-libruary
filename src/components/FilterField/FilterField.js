import { stack, year } from "./filterFieldData";
import Select from "./Select";
import Input from "./Input";
import React from "react";
import PropTypes from "prop-types";

export default function FilterField(props) {
  return (
    <div className="filter-form">
      <Input
        stateFunc={ props.setTitleFilter }
        labelText="Поиск по названию: "
        searchValue={ props.searchTitle }
      />
      <Input
        stateFunc={ props.setAuthorFilter }
        labelText="Поиск по автору: "
        searchValue={ props.searchAuthor }
      />
      <Select
        data={ stack }
        stateFunc={ props.setStackFilter }
        labelText="Поиск по технологическому стэку: "
        searchValue={ props.searchStack }
      />
      <Select
        data={ year }
        stateFunc={ props.setYearFilter }
        labelText="Поиск по году издания: "
        searchValue={ props.searchYear }
      />
      <span>Найдено: { props.result }</span>
    </div>
  );
}

FilterField.propTypes = {
  setStackFilter: PropTypes.func,
  setYearFilter: PropTypes.func,
  setTitleFilter: PropTypes.func,
  setAuthorFilter: PropTypes.func,
  searchStack: PropTypes.string,
  searchYear: PropTypes.string,
  searchTitle: PropTypes.string,
  searchAuthor: PropTypes.string,
  result: PropTypes.number
};
