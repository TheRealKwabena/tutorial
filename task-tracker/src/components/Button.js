import React from 'react'
import PropTypes from 'prop-types'
const Button = ({color,text, onClick, showAdd}) => {
  return (
    <button onClick={onClick} className='btn' style={{backgroundColor: color }}>{text}</button>
  )
}


Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string    
}

export default Button