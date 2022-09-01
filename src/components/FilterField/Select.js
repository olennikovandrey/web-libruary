import React from "react";
import PropTypes from "prop-types";

export default function Select(props) {
  const { stateFunc, data, labelText, searchValue } = props;

  return (
    <div className="input-wrapper">
      <label>
        { labelText }
        <select onChange={ (event) => stateFunc(event.target.value) } value={ searchValue }>
          {
            data.map(item =>
              <option key={ item } value={ item }>{ item }</option>
            )
          }
        </select>
      </label>
      <span className="clear-btn" onClick={ () => stateFunc("All") }></span>
    </div>
  );
}

Select.propTypes = {
  stateFunc: PropTypes.func,
  data: PropTypes.array,
  labelText: PropTypes.string,
  searchValue: PropTypes.string
};
