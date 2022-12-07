import React from 'react'

import PropTypes from 'prop-types'

const ListItem = (props) => {
  return (
    <>
      <div className="list-item-container">
        <h5 className="list-item-text HeadingThree">{props.new_prop}</h5>
        <span>{props.description}</span>
      </div>
      <style jsx>
        {`
          .list-item-container {
            flex: 0 0 auto;
            display: flex;
            padding: 1rem;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .list-item-text {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
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
