import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import Component2 from '../components/component2'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import FooterGray from '../components/footer-gray'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Merkaba Mushrooms - Medicinal Mushrooms Tinctures</title>
          <meta
            property="og:title"
            content="Merkaba Mushrooms - Medicinal Mushrooms Tinctures"
          />
        </Head>
        <Header></Header>
        <div className="home-hero">
          <div className="home-container01">
            <div className="home-card">
              <div className="home-container02">
                <h1 className="home-text">Merkaba Mushrooms</h1>
                <h2 className="home-text01">
                  <span className="HeadingOne">A New Way to Cultivate </span>
                  <span className="HeadingOne">Your Mind and Body</span>
                  <br></br>
                </h2>
                <span className="home-text05">
                  Fruiting Body only tinctures specifically formulated to taste
                  good and make you feel good
                </span>
              </div>
              <div className="home-container03">
                <div className="home-container04">
                  <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
                </div>
                <OutlineGrayButton button="read more"></OutlineGrayButton>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/curved6-1500h.jpg"
          className="home-image"
        />
        <img
          alt="image"
          src="/playground_assets/lions%20mane%20bottle%20empty-300w.png"
          className="home-image01"
        />
        <section className="home-features">
          <FeatureCard
            text="Best Extraction Method with the Latest Moethodology on Retaining the Beneficial Compounds"
            title="Components"
            image_src="/playground_assets/cube1.svg"
          ></FeatureCard>
          <FeatureCard
            text="Not Mycelium "
            new_prop="100% Fruiting Body"
            image_src="/playground_assets/person1.svg"
          ></FeatureCard>
          <FeatureCard
            text="Your Medicinal Mushrooms are Grown with the Hieghest Ethical Standards and Quality"
            title="Less Code"
            new_prop="Grown in the USA"
            image_src="/playground_assets/rocket1.svg"
          ></FeatureCard>
          <FeatureCard
            text="Research &amp; Developed"
            title="Fully Responsive"
            new_prop="Research &amp; Developed"
            image_src="/playground_assets/credit%20card1.svg"
          ></FeatureCard>
        </section>
        <Component2></Component2>
        <section className="home-testimonials">
          <div className="home-container05">
            <div className="home-container06">
              <div className="home-container07">
                <h2 className="home-text06 HeadingOne">Work with us</h2>
                <p className="home-text07 Lead">
                  <span className="home-text08">
                    Whatever your qualification is - we got you!
                  </span>
                </p>
                <p className="home-text09 Body">
                  <span className="home-text10">
                    &quot;Take up one idea. Make that one idea your life - think
                    of it, dream of it, live on that idea. Let the brain,
                    muscles, nerves, every part of your body, be full of that
                    idea, and just leave every other idea alone. This is the way
                    to success. A single rose can be my garden... a single
                    friend, my world.&quot;
                  </span>
                </p>
                <p className="home-text11">Mark Jojansen</p>
                <p className="home-text12 Small">Project manager, Atlassian</p>
                <div className="home-container08">
                  <img
                    alt="image"
                    src="/playground_assets/team-4-200h.jpg"
                    className="home-image02"
                  />
                  <div className="home-container09"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-3-200h.jpg"
                    className="home-image03"
                  />
                  <div className="home-container10"></div>
                  <img
                    alt="image"
                    src="/playground_assets/team-2-200h.jpg"
                    className="home-image04"
                  />
                </div>
              </div>
            </div>
            <div className="home-logos">
              <div className="home-container11">
                <div className="home-container12">
                  <div className="home-container13">
                    <img
                      alt="image"
                      src="/playground_assets/logo-asana.svg"
                      className="home-image05"
                    />
                  </div>
                  <div className="home-container14">
                    <img
                      alt="image"
                      src="/playground_assets/logo-slack.svg"
                      className="home-image06"
                    />
                  </div>
                  <div className="home-container15">
                    <img
                      alt="image"
                      src="/playground_assets/logo-google-drive.svg"
                      className="home-image07"
                    />
                  </div>
                </div>
                <div className="home-container16">
                  <div className="home-container17">
                    <img
                      alt="image"
                      src="/playground_assets/logo-shopify.svg"
                      className="home-image08"
                    />
                  </div>
                  <div className="home-container18">
                    <img
                      alt="image"
                      src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                      className="home-image09"
                    />
                  </div>
                  <div className="home-container19">
                    <img
                      alt="image"
                      src="/playground_assets/logo-invision.svg"
                      className="home-image10"
                    />
                  </div>
                </div>
                <div className="home-container20">
                  <div className="home-container21">
                    <img
                      alt="image"
                      src="/playground_assets/logo-attlasian.svg"
                      className="home-image11"
                    />
                  </div>
                  <div className="home-container22">
                    <img
                      alt="image"
                      src="/playground_assets/logo-weave.svg"
                      className="home-image12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/bottom.svg"
            className="home-bottom-wave-image"
          />
          <img
            alt="image"
            src="/playground_assets/waves-white.svg"
            className="home-image13"
          />
          <img
            alt="image"
            src="/playground_assets/top.svg"
            className="home-top-wave-image"
          />
        </section>
        <section className="home-container23">
          <div className="home-container24">
            <div className="home-container25">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="home-text13 HeadingTwo">
              <span className="home-text14">Beware The Components</span>
            </h2>
            <h3 className="home-text15 HeadingTwo">
              <span className="home-text16">How To Handle Them</span>
              <br></br>
            </h3>
            <span className="home-text17">
              <span className="home-text18">
                We’re constantly trying to express ourselves and actualize our
                dreams. Don&apos;t stop.
              </span>
            </span>
          </div>
          <div className="home-container26">
            <div className="home-container27">
              <div className="home-container28"></div>
              <div className="home-container29">
                <svg
                  viewBox="0 0 987.4285714285713 1024"
                  className="home-icon2"
                >
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="home-text19 HeadingOne">Search and Discover!</h1>
                <span className="home-text20">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
            <div className="home-container30">
              <ListItem></ListItem>
              <ListItem
                title="2. Performance Analyze"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. Social Conversions"
                description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
              ></ListItem>
            </div>
          </div>
          <div className="home-divider"></div>
          <div className="home-container31">
            <div className="home-container32">
              <ListItem
                title="1. Always in Sync"
                description="No matter where you are, Trello stays in sync across all of your devices."
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                description="Integrate the apps your team already uses directly into your workflow."
              ></ListItem>
            </div>
            <div className="home-container33">
              <div className="home-container34"></div>
              <div className="home-container35">
                <svg viewBox="0 0 1152 1024" className="home-icon4">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="home-text23 HeadingOne">Talk and Meet!</h1>
                <span className="home-text24">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton button="get started"></OutlineBlackButton>
              </div>
            </div>
          </div>
        </section>
        <FooterGray rootClassName="footer-gray-root-class-name"></FooterGray>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            padding-top: 3rem;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            font-size: 2.25rem;
            text-align: center;
            font-family: Italiana;
            font-weight: 700;
            line-height: 1.3;
            text-transform: uppercase;
            text-decoration: none;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text01 {
            color: var(--dl-color-secondary-700);
            text-align: left;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .home-text05 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .home-container03 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container04 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 50%;
            bottom: 0px;
            height: 80vh;
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .home-image01 {
            top: 158px;
            right: 131px;
            width: 253px;
            height: 503px;
            position: absolute;
            object-fit: contain;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .home-features {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: 15rem;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 15rem;
            justify-content: space-between;
          }
          .home-container06 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container07 {
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text06 {
            color: var(--dl-color-gray-white);
          }
          .home-text07 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text08 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .home-text09 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text10 {
            display: inline;
            font-weight: 600;
            white-space: normal;
          }
          .home-text11 {
            color: var(--dl-color-gray-white);
          }
          .home-text12 {
            color: var(--dl-color-gray-white);
            opacity: 0.8;
          }
          .home-container08 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image02 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image02:hover {
            transform: scale(1.2);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image03 {
            width: 40px;
            opacity: 0.5;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image03:hover {
            transform: scale(1.2);
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 1px;
            height: 25px;
            display: flex;
            opacity: 0.8;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image04 {
            width: 40px;
            object-fit: cover;
            transition: 0.3;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .home-image04:hover {
            transform: scale(1.2);
          }
          .home-logos {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container11 {
            flex: 0 0 auto;
            display: flex;
            min-width: 400px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container13 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image05 {
            width: 100%;
          }
          .home-container14 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image06 {
            width: 100%;
          }
          .home-container15 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image07 {
            width: 100%;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container17 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image08 {
            width: 100%;
            object-fit: cover;
          }
          .home-container18 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image09 {
            width: 100%;
          }
          .home-container19 {
            width: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image10 {
            width: 100%;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 50%;
            height: 70px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container21 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image11 {
            width: 100%;
          }
          .home-container22 {
            width: 58px;
            height: 58px;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-gray-white);
          }
          .home-image12 {
            width: 100%;
            object-fit: cover;
          }
          .home-bottom-wave-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -5px;
            position: absolute;
            object-fit: cover;
          }
          .home-image13 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-top-wave-image {
            top: -5px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-container23 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-container24 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container25 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .home-icon {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .home-text13 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text14 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .home-text15 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text16 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text18 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-container26 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container27 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-working.jpg');
            background-position: center;
          }
          .home-container27:hover {
            transform: scale(1.04);
          }
          .home-container28 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container29 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon2 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text19 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text20 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-container30 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-container31 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container32 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-container33 {
            display: flex;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coffee-shop.jpg');
            background-position: center;
          }
          .home-container33:hover {
            transform: scale(1.04);
          }
          .home-container34 {
            top: 0px;
            left: 0px;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            border-radius: var(--dl-radius-radius-radius1);
          }
          .home-container35 {
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon4 {
            fill: var(--dl-color-gray-900);
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text23 {
            color: var(--dl-color-gray-white);
            max-width: 200px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text24 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-container01 {
              max-width: 960px;
            }
            .home-card {
              width: 100%;
              height: auto;
            }
            .home-container02 {
              width: 70%;
              height: auto;
            }
            .home-text01 {
              color: var(--dl-color-secondary-700);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text05 {
              color: var(--dl-color-secondary-600);
            }
            .home-image01 {
              display: none;
            }
            .home-features {
              max-width: 960px;
            }
            .home-container05 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .home-container06 {
              align-items: center;
            }
            .home-container07 {
              margin-right: 0px;
            }
            .home-logos {
              display: none;
            }
            .home-container23 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container30 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
            .home-container32 {
              width: 45%;
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .home-card {
              align-items: center;
            }
            .home-text05 {
              color: var(--dl-color-secondary-600);
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-image {
              display: none;
            }
            .home-image01 {
              display: flex;
            }
            .home-features {
              max-width: 720px;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-unitandahalfunit);
              padding-right: var(--dl-space-space-unitandahalfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container05 {
              padding-top: 12rem;
              padding-bottom: 12rem;
            }
            .home-container24 {
              width: 80%;
            }
            .home-text17 {
              text-align: center;
            }
            .home-container26 {
              flex-direction: column;
            }
            .home-container30 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .home-divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container31 {
              margin-top: 0px;
              flex-direction: column;
            }
            .home-container32 {
              width: 80%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-card {
              padding: var(--dl-space-space-halfunit);
            }
            .home-text {
              font-size: 2.25rem;
              text-align: left;
              font-family: Italiana;
              font-weight: 700;
              line-height: 1.3;
              text-transform: uppercase;
              text-decoration: none;
              background-image: linear-gradient(
                310deg,
                rgb(121, 40, 202),
                rgb(255, 0, 128)
              );
            }
            .home-text01 {
              color: var(--dl-color-secondary-700);
              align-self: center;
              text-align: center;
            }
            .home-text05 {
              color: var(--dl-color-secondary-600);
            }
            .home-container03 {
              align-items: center;
              flex-direction: column;
            }
            .home-container04 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-image01 {
              display: none;
            }
            .home-features {
              width: 100%;
            }
            .home-container05 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text17 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
