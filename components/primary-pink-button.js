import React from 'react'

import PropTypes from 'prop-types'

const PrimaryPinkButton = (props) => {
  return (
    <>
      <div className={`primary-pink-button-container ${props.rootClassName} `}>
        <button className="primary-pink-button-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .primary-pink-button-container {
            display: flex;
            position: relative;
          }
          .primary-pink-button-button {
            color: var(--dl-color-gray-white);
            outline: none;
            background: linear-gradient(310deg, #7928ca, #ff0080);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .primary-pink-button-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }

          @media (max-width: 479px) {
            .primary-pink-button-root-class-name {
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

PrimaryPinkButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

PrimaryPinkButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PrimaryPinkButton
