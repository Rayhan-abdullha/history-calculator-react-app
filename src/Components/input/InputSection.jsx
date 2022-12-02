import React from "react";
import NumberField from "../ui/NumberField";
import PropTypes from "prop-types";

export default function InputSection({handleInputChange, state}) {
  return (
    <div>
      <NumberField name="a" onChange={handleInputChange} value={state.a} />
      <NumberField name="b" onChange={handleInputChange} value={state.b} />
    </div>
  );
}

InputSection.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    state: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
    }).isRequired
}