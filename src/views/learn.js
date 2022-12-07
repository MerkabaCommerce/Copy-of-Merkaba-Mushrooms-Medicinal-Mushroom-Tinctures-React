import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component1 from '../components/component1'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import BlogCard from '../components/blog-card'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'
import './learn.css'

const Learn = (props) => {
  return (
    <div className="learn-container">
      <Helmet>
        <title>Learn - Merkaba Mushrooms - Medicinal Mushrooms Tinctures</title>
        <meta
          property="og:title"
          content="Learn - Merkaba Mushrooms - Medicinal Mushrooms Tinctures"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <section className="learn-container01">
        <div className="learn-container02">
          <Component1></Component1>
          <h2 className="learn-text HeadingTwo">Beware of Imitators</h2>
          <h3 className="learn-text01 HeadingTwo">
            <span className="learn-text02">How To Identify Them</span>
            <br></br>
          </h3>
          <span className="learn-text04">
            We’re constantly trying to express ourselves authentically and
            actualize our dreams to benefit others. Let&apos;s keep pushing the
            truth
          </span>
        </div>
        <div className="learn-container03">
          <div className="learn-container04">
            <div className="learn-container05"></div>
            <div className="learn-container06">
              <svg viewBox="0 0 987.4285714285713 1024" className="learn-icon">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="learn-text05 HeadingOne">Search and Discover!</h1>
              <span className="learn-text06">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className="learn-container07">
            <ListItem></ListItem>
            <ListItem title="2. Performance Analyze"></ListItem>
            <ListItem title="3. Social Conversions"></ListItem>
          </div>
        </div>
        <div className="learn-divider"></div>
        <div className="learn-container08">
          <div className="learn-container09">
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
          <div className="learn-container10">
            <div className="learn-container11"></div>
            <div className="learn-container12">
              <svg viewBox="0 0 1152 1024" className="learn-icon02">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="learn-text09 HeadingOne">Talk and Meet!</h1>
              <span className="learn-text10">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <div className="learn-blog-posts">
        <h1 className="learn-text13 HeadingTwo">
          <span>Check my latest blogposts</span>
          <br></br>
        </h1>
        <div className="learn-container13">
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard
            title="MateLabs machine learning"
            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with"
          ></BlogCard>
          <div className="learn-container14">
            <div className="learn-card">
              <div className="learn-container15">
                <h1 className="learn-text16">Want to Learn More?</h1>
                <span className="learn-text17">
                  Rather than worrying about where to find mushroom facts and
                  opinions, we have curated a repository of knowledge on all
                  things &quot;fungi&quot;
                </span>
                <div className="learn-container16">
                  <button className="learn-button button">
                    <span className="learn-text18">Read more</span>
                    <svg viewBox="0 0 1024 1024" className="learn-icon04">
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="learn-container17"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="learn-contact">
        <div className="learn-container18">
          <div className="learn-form">
            <h2 className="learn-text19 HeadingOne">
              <span>Say Hi!</span>
            </h2>
            <span className="learn-text21 Lead">
              We&apos;d like to talk with you.
            </span>
            <form className="learn-form1">
              <label className="learn-text22 Label">My name is</label>
              <input
                type="text"
                placeholder="Full Name"
                className="learn-textinput Small input"
              />
              <label className="learn-text23 Label">I&apos;m looking for</label>
              <input
                type="text"
                placeholder="What you love"
                className="learn-textinput1 Small input"
              />
              <label className="learn-text24 Label">Your message</label>
              <textarea
                rows="8"
                placeholder="I want to say that..."
                className="learn-textarea textarea Small"
              ></textarea>
            </form>
            <div className="learn-container19">
              <div className="learn-container20">
                <PrimaryBlueButton button="send message"></PrimaryBlueButton>
              </div>
            </div>
          </div>
          <div className="learn-info">
            <div className="learn-container21">
              <h3 className="HeadingTwo">
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Information</span>
              </h3>
              <span className="learn-text28">
                Fill up the form and our Team will get back to you within 24
                hours.
              </span>
              <div className="learn-container22">
                <div className="learn-container23">
                  <svg viewBox="0 0 1024 1024" className="learn-icon06">
                    <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                  </svg>
                  <a href="tel:+40 772 100 200" className="learn-link">
                    (225) 555-5555
                  </a>
                </div>
                <div className="learn-container24">
                  <svg viewBox="0 0 1024 1024" className="learn-icon08">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:hello@creative-tim.com?subject="
                    className="learn-link1 Small"
                  >
                    hello@merkabamushrooms.com
                  </a>
                </div>
                <div className="learn-container25">
                  <svg viewBox="0 0 1024 1024" className="learn-icon10">
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <span className="learn-text29 Small">
                    Somewhere, Baton Rouge, LA
                  </span>
                </div>
              </div>
              <div className="learn-container26">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="learn-icon12"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="learn-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="learn-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/wave-1.svg"
              className="learn-image"
            />
            <div className="learn-container27"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Learn
