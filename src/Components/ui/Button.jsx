import React from 'react'
import PropTypes from 'prop-types'

export default function Button({name, onClick, customStyle, disableArth}) {
    const style = {
        ...customStyle
    }
  return <button disabled={disableArth} className='button1' style={style} onClick={onClick}>{name}</button>
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    customStyle: PropTypes.object,
}
Button.defaultProps = {
    customStyle: {}
}