import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
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
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .footer-container {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-container2 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            width: auto;
            align-self: center;
            object-fit: cover;
          }
          .footer-text {
            align-self: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-container3 {
            display: flex;
            justify-content: space-between;
          }
          .footer-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text01 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text02 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text02:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text03 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text03:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text04 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text04:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text05 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text06 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text06:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text07 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text07:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text08 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text08:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container6 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text09 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text10 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text10:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text11 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text11:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text12 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text12:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container7 {
            flex: 0 0 auto;
            width: 70%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .footer-text13 {
            color: #fefeff;
            font-size: 14px;
            text-align: center;
            font-family: Montserrat;
          }
          .footer-container8 {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-end;
            padding-bottom: var(--dl-space-space-unit);
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/waves-white.svg');
            background-position: center;
          }
          .footer-text14 {
            color: #ffffff;
            padding-top: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .footer-container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              flex-direction: column;
            }
            .footer-container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container5 {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .footer-container6 {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
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
