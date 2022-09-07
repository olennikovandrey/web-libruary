import React from "react";
import PropTypes from "prop-types";

export default function SortSelect(props) {
  const { stateFunc, data, labelText, booksPerPage } = props;

  const selectChanger = () => {
    const selectSingle = document.querySelector(".select-amount__wrapper");
    const selectSingleTitle = selectSingle.querySelector(".select-amount__title");
    const selectSingleLabels = selectSingle.querySelectorAll(".select-amount__label");

    if ((selectSingle.getAttribute("data-state") === "active")) {
      selectSingle.setAttribute("data-state", "");
    } else {
      selectSingle.setAttribute("data-state", "active");
    }

    for (let i = 0; i < selectSingleLabels.length; i ++) {
      selectSingleLabels[i].addEventListener("click", (event) => {
        selectSingleTitle.textContent = event.target.textContent;
        selectSingle.setAttribute("data-state", "");
      });
    }

    document.addEventListener("click", (event) => {
      if (!event.target.matches(".select-amount, .select-amount * ")) {
        selectSingle.setAttribute("data-state", "");
      }
    });
  };

  return (
    <div className="select-amount">
      { labelText }
      <div className="select-amount__wrapper" data-state="">
        <div
          className="select-amount__title"
          onClick={ (event) => selectChanger(stateFunc, event) }
          value={ booksPerPage }
        >
          { booksPerPage }
        </div>
        <div className="select-amount__content">
          { data.map(item =>
            <React.Fragment key={ item }>
              <input id={ item } className="select-amount__input" type="radio" name="singleSelect" />
              <label
                htmlFor={ item }
                className="select-amount__label"
                value={ item }
                onClick={ (event) => stateFunc(+event.target.textContent) }
              >
                { item }
              </label>
            </React.Fragment>
          ) }
        </div>
      </div>
    </div>
  );
}

SortSelect.propTypes = {
  stateFunc: PropTypes.func,
  data: PropTypes.array,
  labelText: PropTypes.string,
  booksPerPage: PropTypes.number
};
