import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text HeadingThree">{props.new_prop}</h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'Check to see if it states if there\'s any existing "beta-glucans. "',
  new_prop: '1. See the active ingredients',
}

ListItem.propTypes = {
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default ListItem
