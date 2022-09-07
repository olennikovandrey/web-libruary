import { stack, year, formats } from "./data/filterFieldData";
import Input from "./Input/Input";
import Select from "./Select/Select";
import React from "react";
import PropTypes from "prop-types";

export default function FilterField(props) {
  const clearAllFields = () => {
    props.setTitleFilter("");
    props.setAuthorFilter("");
    props.setStackFilter("Все");
    props.setYearFilter("Все");
    props.setFormatFilter("");
  };

  return (
    <aside className="filter-form">
      <div>
        <h3 className="filter-form__title">Поиск по:</h3>
        <div>
          <Input
            stateFunc={ props.setTitleFilter }
            labelText="названию: "
            searchValue={ props.searchTitle }
          />
          <Input
            stateFunc={ props.setAuthorFilter }
            labelText="автору: "
            searchValue={ props.searchAuthor }
          />
          <Select
            data={ stack }
            stateFunc={ props.setStackFilter }
            labelText="технологическому стэку: "
            searchValue={ props.searchStack }
            preClassName="stack"
          />
          <Select
            data={ year }
            stateFunc={ props.setYearFilter }
            labelText="году издания: "
            searchValue={ props.searchYear }
            preClassName="year"
          />
          <Select
            data={ formats }
            stateFunc={ props.setFormatFilter }
            labelText="формату файла: "
            searchValue={ props.searchFileFormat }
            preClassName="format"
          />
          <span>Найдено изданий: { props.result }</span>
        </div>
      </div>
      <button
        type="button"
        className="filter-form__clear-all"
        onClick={ () => clearAllFields() }
      >
        Сбросить все фильтры
      </button>
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
