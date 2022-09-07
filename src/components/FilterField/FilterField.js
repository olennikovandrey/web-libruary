import { stack, year, formats } from "./data/filterFieldData";
import Input from "./Input/Input";
import Select from "./Select/Select";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";


export default function FilterField(props) {
  const lang = useSelector(state => state.lang);

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
        <h3 className="filter-form__title">{ lang === "english" ? "Search by:" : "Поиск по:" }</h3>
        <div>
          <Input
            stateFunc={ props.setTitleFilter }
            labelText={ lang === "english" ? "title:" : "названию:" }
            searchValue={ props.searchTitle }
          />
          <Input
            stateFunc={ props.setAuthorFilter }
            labelText={ lang === "english" ? "author:" : "автору:" }
            searchValue={ props.searchAuthor }
          />
          <Select
            data={ stack }
            stateFunc={ props.setStackFilter }
            labelText={ lang === "english" ? "stack:" : "технологическому стэку:" }
            searchValue={ props.searchStack }
            preClassName="stack"
          />
          <Select
            data={ year }
            stateFunc={ props.setYearFilter }
            labelText={ lang === "english" ? "product year:" : "году издания:" }
            searchValue={ props.searchYear }
            preClassName="year"
          />
          <Select
            data={ formats }
            stateFunc={ props.setFormatFilter }
            labelText={ lang === "english" ? "file format:" : "формату файла: " }
            searchValue={ props.searchFileFormat }
            preClassName="format"
          />
          <span>{ lang === "english" ? "Found:" : "Найдено изданий:" } { props.result }</span>
        </div>
      </div>
      <button
        type="button"
        className="filter-form__clear-all"
        onClick={ () => clearAllFields() }
      >
        { lang === "english" ? "Reset all filters" : "Сбросить все фильтры" }
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
