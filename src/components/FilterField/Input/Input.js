import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  const { stateFunc, labelText, searchValue } = props;

  return (
    <div className="input-wrapper">
      <label>
        { labelText }
        <input type="text" value={ searchValue } onChange={ (event) => stateFunc(event.target.value) } />
      </label>
      <span className="clear-btn" onClick={ () => stateFunc(" ") }></span>
    </div>
  );
}

Input.propTypes = {
  stateFunc: PropTypes.func,
  labelText: PropTypes.string,
  searchValue: PropTypes.string
};
