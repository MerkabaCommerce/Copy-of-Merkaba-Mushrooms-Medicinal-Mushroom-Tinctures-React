import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButton from './secondary-button'
import './component.css'

const AppComponent = (props) => {
  return (
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
