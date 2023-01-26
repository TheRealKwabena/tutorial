import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, showAdd, onShow}) => {
   
  return (
   <header className="header">
        <h1>{title}</h1>
        {!showAdd? <Button color='green' text="Add Task" onClick={() => onShow()} /> : <Button color='red' text='Close' onClick={() => onShow()}/>}
   </header>
  )
}


Header.propTypes = {
    title: PropTypes.string
}
export default Header