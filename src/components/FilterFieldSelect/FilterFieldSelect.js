import React from "react";
import PropTypes from "prop-types";

export default function FilterFieldSelect(props) {
  const { stateFunc, data } = props;

  return (
    <>
      <select onChange={ (event) => stateFunc(event.target.value) }>
        {
          data.map(item =>
            <option key={ item } value={ item }>{ item }</option>
          )
        }
      </select>
    </>
  );
}

FilterFieldSelect.propTypes = {
  stateFunc: PropTypes.func,
  data: PropTypes.array
};
