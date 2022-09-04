import { stack, year } from "./filterFieldData";
import Input from "./Input";
import Select from "../Select/Select";
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
        preClassName="stack"
      />
      <Select
        data={ year }
        stateFunc={ props.setYearFilter }
        labelText="Поиск по году издания: "
        searchValue={ props.searchYear }
        preClassName="year"
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
  searchYear: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  searchTitle: PropTypes.string,
  searchAuthor: PropTypes.string,
  result: PropTypes.number
};
