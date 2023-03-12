import React from "react";
import PropTypes from "prop-types";

export default function Select(props) {
  const { setCurrentPage, stateFunc, data, labelText, searchValue, preClassName } = props;

  const selectChanger = (stateChangerFunc) => {
    const selectSingle = document.querySelector(`.select-${ preClassName }__wrapper`);
    const selectSingleTitle = selectSingle.querySelector(`.select-${ preClassName }__title`);
    const selectSingleLabels = selectSingle.querySelectorAll(`.select-${ preClassName }__label`);

    selectSingle.getAttribute("data-state") === "active" ?
      selectSingle.setAttribute("data-state", "") :
      selectSingle.setAttribute("data-state", "active");

    for (let i = 0; i < selectSingleLabels.length; i ++) {
      selectSingleLabels[i].addEventListener("click", (event) => {
        selectSingleTitle.textContent = event.target.textContent;
        selectSingle.setAttribute("data-state", "");
        preClassName === "year" && /[0-9]/.test(selectSingleTitle.textContent) ?
          stateChangerFunc(Number(selectSingleTitle.textContent)) : stateChangerFunc(selectSingleTitle.textContent);
        preClassName === ("stack" || "format" || "author") && stateChangerFunc(selectSingleTitle.textContent);
        setCurrentPage(1);
      });
    }

    document.addEventListener("click", (event) => {
      if (!event.target.matches(".select-year, .select-stack, .select-format, .select-year *, .select-stack *, .select-format *, .select-author, .select-author *")) {
        selectSingle.setAttribute("data-state", "");
      }
    });
  };

  return (
    <div className={`select-${ preClassName }`}>
      <label>
        { labelText }
        <div className={`select-${ preClassName }__wrapper`} data-state="">
          <div
            className={`select-${ preClassName }__title`}
            onClick={ () => selectChanger(stateFunc) }
            value={ searchValue }
          >
            { searchValue }
          </div>
          <div className={`select-${ preClassName }__content`}>
            { data.map(item =>
              <React.Fragment key={ item }>
                <input id={ item } className={`select-${ preClassName }__input`} type="radio" name="singleSelect" />
                <label
                  htmlFor={ item }
                  className={`select-${ preClassName }__label`}
                >
                  { item }
                </label>
              </React.Fragment>
            ) }
          </div>
        </div>
      </label>
      <span
        className={`select-${ preClassName }__clear-btn`}
        onClick={ (event) => event.target.matches(".select-author__clear-btn") || event.target.matches(".select-format__clear-btn") ?
          stateFunc("") : stateFunc("Все") }
      ></span>
    </div>
  );
}

Select.propTypes = {
  setCurrentPage: PropTypes.func,
  stateFunc: PropTypes.func,
  data: PropTypes.array,
  labelText: PropTypes.string,
  searchValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  preClassName: PropTypes.string
};
