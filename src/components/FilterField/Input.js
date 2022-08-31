import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  const { stateFunc, labelText } = props;

  return (
    <>
      <label>
        { labelText }
        <input type="text" onChange={ (event) => stateFunc(event.target.value) } />
      </label>
    </>
  );
}

Input.propTypes = {
  stateFunc: PropTypes.func,
  labelText: PropTypes.string
};
