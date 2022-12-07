import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'

const Header = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`header-header ${props.rootClassName} `}
      >
        <nav className="header-nav">
          <div className="header-container">
            <div className="header-container1">
              <Link href="/">
                <a className="header-link">
                  <img
                    alt={props.image_alt}
                    src={props.image_src}
                    className="header-image"
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="header-link01">Merkaba Mushrooms</a>
              </Link>
            </div>
            <div className="header-menu">
              <Link href="/about-us">
                <a className="header-link02">
                  <span className="Large header-text">About Us</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/coming-soon">
                <a className="header-link03 Large">Coming Soon</a>
              </Link>
              <Link href="/learn">
                <a className="header-link04 Large">Learn</a>
              </Link>
              <a
                href="https://store-1.vercel.app/shop#!/~/"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link05"
              >
                <span className="Large header-text2">Shop</span>
                <br></br>
              </a>
            </div>
            <div className="header-container2">
              <div className="header-container3">
                <a
                  href="https://store-1.vercel.app/shop#!/~/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="header-link06"
                >
                  <PrimaryPinkButton
                    button="buy now"
                    className="header-component"
                  ></PrimaryPinkButton>
                </a>
              </div>
              <div data-role="BurgerMenu" className="header-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="header-mobile-menu">
          <div className="header-top">
            <Link href="/">
              <a className="header-link07 Large">Soft UI Design System</a>
            </Link>
            <div data-role="CloseMobileMenu" className="header-close-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-menu1">
              <Link href="/">
                <a className="header-link08 Large">Home</a>
              </Link>
              <Link href="/about-us">
                <a className="header-link09 Large">Profile</a>
              </Link>
              <Link href="/coming-soon">
                <a className="header-link10 Large">Coming Soon</a>
              </Link>
            </div>
          </div>
          <div className="header-bot">
            <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 3;
            position: fixed;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius40);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: hsla(0, 0%, 100%, 0.8) !important;
          }
          .header-container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .header-link {
            display: contents;
          }
          .header-image {
            width: auto;
            object-fit: cover;
            text-decoration: none;
          }
          .header-link01 {
            color: var(--dl-color-secondary-700);
            align-self: center;
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-link02 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link02:hover {
            color: var(--dl-color-gray-500);
          }
          .header-text:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link03 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link03:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link04 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link04:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link05 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link05:hover {
            color: var(--dl-color-gray-500);
          }
          .header-text2:hover {
            color: var(--dl-color-gray-500);
          }
          .header-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link06 {
            display: contents;
          }
          .header-component {
            text-decoration: none;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .header-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-unitandahalfunit);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .header-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link07 {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            text-decoration: none;
          }
          .header-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-icon2 {
            width: 24px;
            height: 24px;
          }
          .header-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-link08 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link08:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link09 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-link09:hover {
            color: var(--dl-color-gray-500);
          }
          .header-link10 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header-link10:hover {
            color: var(--dl-color-gray-500);
          }
          .header-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .header-nav {
              max-width: 960px;
            }
          }
          @media (max-width: 767px) {
            .header-menu {
              display: none;
            }
            .header-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-menu {
              display: none;
              align-items: flex-start;
            }
            .header-container3 {
              display: none;
            }
            .header-mobile-menu {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  image_src: '/playground_assets/merkaba%20mushrooms%20logo-200w.png',
  image_alt: 'image',
  rootClassName: '',
}

Header.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
