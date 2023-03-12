import { stackRU, yearRU, stackEN, yearEN, formats, getAuthors } from "./data/filterFieldData";
import Input from "./Input/Input";
import Select from "./Select/Select";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function FilterField(props) {
  const lang = useSelector(state => state.lang);
  const {
    stateChangerFn, setCurrentPage, setSearchTitle, setSearchAuthor, setSearchStack, setSearchYear, setSearchFileFormat,
    searchTitle, searchAuthor, searchStack, searchYear, searchFileFormat, result } = props;

  const clearAllFields = () => {
    setSearchTitle("");
    setSearchAuthor("");
    setSearchStack("Все");
    setSearchYear("Все");
    setSearchFileFormat("");
  };

  return (
    <aside className="filter-form">
      <div>
        <h3 className="filter-form__title">{ lang === "english" ? "Search by:" : "Поиск по:" }</h3>
        <div>
          <Input
            stateChangerFn={ stateChangerFn}
            stateFunc={ setSearchTitle }
            labelText={ lang === "english" ? "title:" : "названию:" }
            searchValue={ searchTitle }
          />
          <Select
            data={ getAuthors() }
            stateFunc={ setSearchAuthor }
            setCurrentPage={ setCurrentPage }
            labelText={ lang === "english" ? "author:" : "автору:" }
            searchValue={ searchAuthor }
            preClassName="author"
          />
          <Select
            data={ lang === "english" ? stackEN : stackRU }
            stateFunc={ setSearchStack }
            setCurrentPage={ setCurrentPage }
            labelText={ lang === "english" ? "stack:" : "технологическому стэку:" }
            searchValue={ searchStack }
            preClassName="stack"
          />
          <Select
            data={ lang === "english" ? yearEN : yearRU }
            stateFunc={ setSearchYear }
            setCurrentPage={ setCurrentPage }
            labelText={ lang === "english" ? "product year:" : "году издания:" }
            searchValue={ searchYear }
            preClassName="year"
          />
          <Select
            data={ formats }
            stateFunc={ setSearchFileFormat }
            setCurrentPage={ setCurrentPage }
            labelText={ lang === "english" ? "file format:" : "формату файла: " }
            searchValue={ searchFileFormat }
            preClassName="format"
          />
          <span>{ lang === "english" ? "Found:" : "Найдено изданий:" } { result }</span>
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
  setCurrentPage: PropTypes.func,
  stateChangerFn: PropTypes.func,
  setSearchStack: PropTypes.func,
  setSearchYear: PropTypes.func,
  setSearchTitle: PropTypes.func,
  setSearchAuthor: PropTypes.func,
  setSearchFileFormat: PropTypes.func,
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
