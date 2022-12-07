import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButton from './secondary-button'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container">
        <h1 className="component-text">{props.heading}</h1>
        <h1 className="component-text1 HeadingOne">{props.heading1}</h1>
        <p className="component-text2 Lead">
          <span className="component-text3">
            The time is now for it be okay to be great. Subscribe now and get
            notified when it&apos;s launched!
          </span>
        </p>
        <div className="component-container1">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="component-textinput Small input"
          />
          <SecondaryButton button="Subscribe"></SecondaryButton>
        </div>
      </div>
      <style jsx>
        {`
          .component-container {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            z-index: 2;
            position: relative;
            align-self: flex-end;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-tripleunit);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .component-text {
            color: var(--dl-color-secondary-700);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .component-text1 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .component-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .component-text3 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .component-container1 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .component-textinput {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .component-textinput:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          @media (max-width: 991px) {
            .component-container {
              width: 70%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-tripleunit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .component-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .component-container1 {
              flex-direction: column;
            }
            .component-textinput {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  textinput_placeholder: 'Email here',
  heading1: "Merkaba Mushroom's",
  heading: 'About',
}

AppComponent.propTypes = {
  textinput_placeholder: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default AppComponent
