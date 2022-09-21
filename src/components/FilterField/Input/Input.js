import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  const { stateChangerFn, stateFunc, labelText, searchValue } = props;

  return (
    <div className="input-wrapper">
      <label>
        { labelText }
        <input type="text" value={ searchValue } onChange={ (event) => stateChangerFn(event.target.value, stateFunc) } />
      </label>
      <span className="clear-btn" onClick={ () => stateChangerFn(" ", stateFunc) }></span>
    </div>
  );
}

Input.propTypes = {
  stateChangerFn: PropTypes.func,
  stateFunc: PropTypes.func,
  labelText: PropTypes.string,
  searchValue: PropTypes.string
};
