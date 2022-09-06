import { stack, year, formats } from "./data/filterFieldData";
import Input from "./Input/Input";
import Select from "./Select/Select";
import React from "react";
import PropTypes from "prop-types";

export default function FilterField(props) {
  const clearAllFields = () => {
    props.setTitleFilter("");
    props.setAuthorFilter("");
    props.setStackFilter("All");
    props.setYearFilter("All");
    props.setFormatFilter("");
  };

  return (
    <aside className="filter-form">
      <div>
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
        <Select
          data={ formats }
          stateFunc={ props.setFormatFilter }
          labelText="Поиск по формату файла: "
          searchValue={ props.searchFileFormat }
          preClassName="format"
        />
        <span>Найдено: { props.result }</span>
      </div>
      <button
        type="button"
        className="filter-form__clear-all"
        onClick={ () => clearAllFields() }
      >Сбросить все фильтры</button>
    </aside>
  );
}

FilterField.propTypes = {
  setStackFilter: PropTypes.func,
  setYearFilter: PropTypes.func,
  setTitleFilter: PropTypes.func,
  setAuthorFilter: PropTypes.func,
  setFormatFilter: PropTypes.func,
  searchStack: PropTypes.string,
  searchYear: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  searchTitle: PropTypes.string,
  searchAuthor: PropTypes.string,
  searchFileFormat: PropTypes.string,
  result: PropTypes.number
};
