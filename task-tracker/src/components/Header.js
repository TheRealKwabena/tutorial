import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onShow}) => {
   
  return (
   <header className="header">
        <h1>{title}</h1>
        <Button color='green' text="Add Task" onClick={() => onShow()} />
   </header>
  )
}


Header.propTypes = {
    title: PropTypes.string
}
export default Header