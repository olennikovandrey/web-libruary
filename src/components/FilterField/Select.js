import React from "react";
import PropTypes from "prop-types";

export default function Select(props) {
  const { stateFunc, data, labelText } = props;

  return (
    <>
      <label>
        { labelText }
        <select onChange={ (event) => stateFunc(event.target.value) }>
          {
            data.map(item =>
              <option key={ item } value={ item }>{ item }</option>
            )
          }
        </select>
      </label>
    </>
  );
}

Select.propTypes = {
  stateFunc: PropTypes.func,
  data: PropTypes.array,
  labelText: PropTypes.string
};
