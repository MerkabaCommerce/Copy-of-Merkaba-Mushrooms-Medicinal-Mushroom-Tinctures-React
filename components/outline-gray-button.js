import React from 'react'

import PropTypes from 'prop-types'

const OutlineGrayButton = (props) => {
  return (
    <>
      <div className={`outline-gray-button-container ${props.rootClassName} `}>
        <button className="outline-gray-button-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .outline-gray-button-container {
            display: flex;
            position: relative;
          }
          .outline-gray-button-button {
            color: var(--dl-color-secondary-200);
            outlinr: none;
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-color: var(--dl-color-secondary-200);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .outline-gray-button-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }

          @media (max-width: 479px) {
            .outline-gray-button-root-class-name {
              align-self: flex-start;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

OutlineGrayButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

OutlineGrayButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default OutlineGrayButton
