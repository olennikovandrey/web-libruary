import React from "react";
import PropTypes from "prop-types";

export default function SortItem(props) {
  const { title, stateSortChanger, isAToB, stateAToBFnName, isBToA, stateBToAFnName, sortValueAToB, sortValueBToA } = props;

  return (
    <div className="sort-by">
      <span className="sort-by__title">{ title }</span>
      <div className="sort-by__items">
        <span
          className="sort-item"
          data-name={ isAToB ? "active" : "" }
          onClick={ () => stateSortChanger(stateAToBFnName) }>{ sortValueAToB }
        </span>
        <span
          className="sort-item"
          data-name={ isBToA ? "active" : "" }
          onClick={ () => stateSortChanger(stateBToAFnName) }>{ sortValueBToA }
        </span>
      </div>
    </div>
  );
}

SortItem.propTypes = {
  title: PropTypes.string,
  stateSortChanger: PropTypes.func,
  isAToB: PropTypes.bool,
  stateAToBFnName: PropTypes.string,
  isBToA: PropTypes.bool,
  stateBToAFnName: PropTypes.string,
  sortValueAToB: PropTypes.string,
  sortValueBToA: PropTypes.string
};
