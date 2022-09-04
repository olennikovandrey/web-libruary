import React from "react";
import PropTypes from "prop-types";

export default function Select(props) {
  const { stateFunc, data, labelText, searchValue, preClassName } = props;

  const selectChanger = (stateChangerFunc) => {
    const selectSingle = document.querySelector(`.select-${ preClassName }__wrapper`);
    const selectSingleTitle = selectSingle.querySelector(`.select-${ preClassName }__title`);
    const selectSingleLabels = selectSingle.querySelectorAll(`.select-${ preClassName }__label`);

    if ((selectSingle.getAttribute("data-state") === "active")) {
      selectSingle.setAttribute("data-state", "");
    } else {
      selectSingle.setAttribute("data-state", "active");
    }

    for (let i = 0; i < selectSingleLabels.length; i ++) {
      selectSingleLabels[i].addEventListener("click", (event) => {
        selectSingleTitle.textContent = event.target.textContent;
        selectSingle.setAttribute("data-state", "");
        preClassName === "year" && stateChangerFunc(+selectSingleTitle.textContent);
        preClassName === "stack" && stateChangerFunc(selectSingleTitle.textContent);
      });
    }

    document.addEventListener("click", (event) => {
      if (!event.target.matches(".select-year, .select-stack, .select-year *, .select-stack *")) {
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
      <span className="clear-btn" onClick={ () => stateFunc("All") }></span>
    </div>
  );
}

Select.propTypes = {
  stateFunc: PropTypes.func,
  data: PropTypes.array,
  labelText: PropTypes.string,
  searchValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  preClassName: PropTypes.string
};
