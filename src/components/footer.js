import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <div className="footer-container2">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-image"
            />
            <span className="footer-text">Merkaba Mushrooms</span>
          </div>
        </div>
        <div className="footer-container3">
          <div className="footer-container4">
            <span className="footer-text01 Large">Company</span>
            <span className="footer-text02 Large">About Us</span>
            <span className="footer-text03 Large">Careers</span>
            <span className="footer-text04 Large">Press</span>
          </div>
          <div className="footer-container5">
            <span className="footer-text05 Large">Pages</span>
            <span className="footer-text06 Large">Login</span>
            <span className="footer-text07 Large">Register</span>
            <span className="footer-text08 Large">About</span>
          </div>
          <div className="footer-container6">
            <span className="footer-text09 Large">Products</span>
            <span className="footer-text10 Large">Free</span>
            <span className="footer-text11 Large">PRO</span>
            <span className="footer-text12 Large">Latest</span>
          </div>
        </div>
      </div>
      <div className="footer-container7">
        <span className="footer-text13">{props.disclaimer}</span>
      </div>
      <div className="footer-container8">
        <span className="footer-text14">
          Copyright © 2022 Merkaba Mushrooms
        </span>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  image_src: '/playground_assets/merkaba%20mushrooms%20logo-200w.png',
  image_alt: 'image',
  disclaimer:
    '"These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease."',
}

Footer.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  disclaimer: PropTypes.string,
}

export default Footer
