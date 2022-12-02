import React from "react";
import PropTypes from 'prop-types'

export default function NumberField({name, onChange, value}) {
  return <input type="number" name={name} onChange={onChange} value={value} placeholder="Enter number"/>;
}

NumberField.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}