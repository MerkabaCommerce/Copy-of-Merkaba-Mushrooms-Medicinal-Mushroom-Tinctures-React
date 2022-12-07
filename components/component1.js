import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className="component1-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component1-image"
        />
      </div>
      <style jsx>
        {`
          .component1-container {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .component1-image {
            width: auto;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  image_src: '/playground_assets/logowhtasset%202-200w.png',
  image_alt: 'image',
}

Component1.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component1
