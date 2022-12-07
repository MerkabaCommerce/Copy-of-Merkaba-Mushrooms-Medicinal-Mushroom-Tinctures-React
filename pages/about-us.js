import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import BlogCard from '../components/blog-card'
import PrimaryBlueButton from '../components/primary-blue-button'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>
            About-Us - Merkaba Mushrooms - Medicinal Mushrooms Tinctures
          </title>
          <meta
            property="og:title"
            content="About-Us - Merkaba Mushrooms - Medicinal Mushrooms Tinctures"
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="about-us-main">
          <div className="about-us-container01">
            <h1 className="about-us-text">About</h1>
            <h1 className="about-us-text01 HeadingOne">
              Merkaba Mushroom&apos;s
            </h1>
            <p className="about-us-text02 Lead">
              <span className="about-us-text03">
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className="about-us-container02">
              <input
                type="text"
                placeholder="Email here"
                className="about-us-textinput Small input"
              />
              <SecondaryButton button="Subscribe"></SecondaryButton>
            </div>
          </div>
          <div className="about-us-grid">
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-us-image"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-us-image01"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-us-image02"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-us-image03"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-us-image04"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-us-image05"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-us-image06"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-us-image07"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-us-image08"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-us-image09"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-us-image10"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-us-image11"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="about-us-image12"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="about-us-image13"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="about-us-image14"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="about-us-image15"
            />
          </div>
        </div>
        <section className="about-us-container03">
          <div className="about-us-container04">
            <span className="about-us-text04">MEET MERKABA</span>
            <h1 className="about-us-text05">
              The South’s Leading Medicinal Mushroom Company Providing Quality
              Mushroom Tinctures
            </h1>
          </div>
          <div className="about-us-container05">
            <div className="about-us-container06">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1532634993-15f421e42ec0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGxhYnJhdG9yeXxlbnwwfHx8fDE2Njg2MjQ2MDM&amp;ixlib=rb-4.0.3&amp;w=1100"
                className="about-us-image16"
              />
              <span className="about-us-text06 Small">
                <span className="about-us-text07">
                  &quot;Over the span of the satellite record, Arctic sea ice
                  has been declining significantly, while sea ice in the
                  Antarctichas increased very slightly&quot;
                </span>
                <br></br>
                <span className="about-us-text09">-NOAA</span>
              </span>
              <div className="about-us-container07">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1634326599007-a108c3f5abcd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGNvcmR5Y2Vwc3xlbnwwfHx8fDE2Njg2MjQ2ODM&amp;ixlib=rb-4.0.3&amp;w=1000"
                  className="about-us-image17"
                />
              </div>
            </div>
            <div className="about-us-container08">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1654011021856-5d590a4f6770?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYzfHxtdXNocm9vbSUyMGZvcmFnaW5nfGVufDB8fHx8MTY2ODYyNDY2MA&amp;ixlib=rb-4.0.3&amp;w=1100"
                className="about-us-image18"
              />
              <div className="about-us-container09">
                <h3 className="HeadingTwo">
                  <span className="about-us-text11">
                    So what does the new record for the lowest level of winter
                    ice actually mean
                  </span>
                </h3>
                <p>
                  <br></br>
                  <span className="about-us-text13">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="about-us-text16">
                    For a start, it does not automatically follow that a record
                    amount of ice will melt this summer. More important for
                    determining the size of the annual thaw is the state of the
                    weather as the midnight sun approaches and temperatures
                    rise. But over the more than 30 years of satellite records,
                    scientists have observed a clear pattern of decline,
                    decade-by-decade.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span className="about-us-text19">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens with climate change. Even if the
                    Arctic continues to be one of the fastest-warming regions of
                    the world, it will always be plunged into bitterly cold
                    polar dark every winter. And year-by-year, for all kinds of
                    natural reasons, there’s huge variety of the state of the
                    ice.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="about-us-profile">
          <img
            alt="image"
            src="/playground_assets/jordan%20profile%201-200h.jpeg"
            className="about-us-image19"
          />
          <div className="about-us-container10">
            <div className="about-us-container11">
              <h4 className="about-us-text20">Jordan Gros</h4>
              <OutlineBlueButton button="follow"></OutlineBlueButton>
            </div>
            <div className="about-us-container12">
              <span className="about-us-text21">
                <span className="about-us-text22">323</span>
                <span> Posts</span>
              </span>
              <span className="about-us-text24">
                <span className="about-us-text25">3.5k</span>
                <span> Followers</span>
              </span>
              <span>
                <span className="about-us-text28">260</span>
                <span> Following</span>
              </span>
            </div>
            <span className="Medium">
              Decisions: If you can’t decide, the answer is no. If two equally
              difficult paths, choose the one more painful in the short term
              (pain avoidance is creating an illusion of equality). Choose the
              path that leaves you more equanimous.
            </span>
            <NextButton button="More about me"></NextButton>
          </div>
        </div>
        <div className="about-us-blog-posts">
          <h1 className="about-us-text31 HeadingTwo">
            <span>Check my latest blogposts</span>
            <br></br>
          </h1>
          <div className="about-us-container13">
            <BlogCard></BlogCard>
            <BlogCard image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-clock.jpg"></BlogCard>
            <BlogCard title="MateLabs machine learning"></BlogCard>
            <div className="about-us-container14">
              <div className="about-us-card">
                <div className="about-us-container15">
                  <h1 className="about-us-text34">Flexible work hours</h1>
                  <span className="about-us-text35">
                    Rather than worrying about switching offices every couple
                    years, you stay in the same place.
                  </span>
                  <div className="about-us-container16">
                    <button className="about-us-button button">
                      <span className="about-us-text36">Read more</span>
                      <svg viewBox="0 0 1024 1024" className="about-us-icon">
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="about-us-container17"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-contact">
          <div className="about-us-container18">
            <div className="about-us-form">
              <h2 className="about-us-text37 HeadingOne">
                <span>Say Hi!</span>
              </h2>
              <span className="about-us-text39 Lead">
                We&apos;d like to talk with you.
              </span>
              <form className="about-us-form1">
                <label className="about-us-text40 Label">My name is</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="about-us-textinput1 Small input"
                />
                <label className="about-us-text41 Label">
                  I&apos;m looking for
                </label>
                <input
                  type="text"
                  placeholder="What you love"
                  className="about-us-textinput2 Small input"
                />
                <label className="about-us-text42 Label">Your message</label>
                <textarea
                  rows="8"
                  placeholder="I want to say that..."
                  className="about-us-textarea textarea Small"
                ></textarea>
              </form>
              <div className="about-us-container19">
                <div className="about-us-container20">
                  <PrimaryBlueButton button="send message"></PrimaryBlueButton>
                </div>
              </div>
            </div>
            <div className="about-us-info">
              <div className="about-us-container21">
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
                <span className="about-us-text46">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </span>
                <div className="about-us-container22">
                  <div className="about-us-container23">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon02">
                      <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                    </svg>
                    <a
                      href="tel:+40 772 100 200"
                      className="about-us-link Small"
                    >
                      (+40) 772 100 200
                    </a>
                  </div>
                  <div className="about-us-container24">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon04">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <a
                      href="mailto:hello@creative-tim.com?subject="
                      className="about-us-link1 Small"
                    >
                      hello@creative-tim.com
                    </a>
                  </div>
                  <div className="about-us-container25">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon06">
                      <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                    </svg>
                    <span className="about-us-text47 Small">
                      Dyonisie Wolf Bucharest, RO 010458
                    </span>
                  </div>
                </div>
                <div className="about-us-container26">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="about-us-icon08"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="about-us-icon10"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="about-us-icon12"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="about-us-icon14"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
              <img
                alt="image"
                src="/playground_assets/wave-1.svg"
                className="about-us-image20"
              />
              <div className="about-us-container27"></div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .about-us-main {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: flex-end;
          }
          .about-us-container01 {
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
          .about-us-text {
            color: var(--dl-color-secondary-700);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text01 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .about-us-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-us-text03 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .about-us-container02 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-textinput {
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
          .about-us-textinput:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .about-us-grid {
            top: -20%;
            left: -35%;
            width: 70%;
            display: grid;
            grid-gap: var(--dl-space-space-doubleunit);
            position: absolute;
            transform: rotate(20deg);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .about-us-image {
            width: 100%;
          }
          .about-us-image01 {
            width: 100%;
            margin-top: -200px;
          }
          .about-us-image02 {
            width: 100%;
            margin-top: -50px;
          }
          .about-us-image03 {
            width: 100%;
          }
          .about-us-image04 {
            width: 100%;
          }
          .about-us-image05 {
            width: 100%;
            margin-top: -200px;
          }
          .about-us-image06 {
            width: 100%;
            margin-top: -50px;
          }
          .about-us-image07 {
            width: 100%;
            z-index: 1;
          }
          .about-us-image08 {
            width: 100%;
          }
          .about-us-image09 {
            width: 100%;
            margin-top: -200px;
          }
          .about-us-image10 {
            width: 100%;
            margin-top: -50px;
          }
          .about-us-image11 {
            width: 100%;
          }
          .about-us-image12 {
            width: 100%;
          }
          .about-us-image13 {
            width: 100%;
            margin-top: -200px;
          }
          .about-us-image14 {
            width: 100%;
          }
          .about-us-image15 {
            width: 100%;
          }
          .about-us-container03 {
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
          .about-us-container04 {
            display: flex;
            max-width: 70%;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .about-us-text04 {
            max-width: 600px;
            text-align: center;
            font-weight: bold;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text05 {
            width: 100%;
            z-index: 100;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .about-us-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .about-us-container06 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-image16 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .about-us-text06 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 8rem;
            flex-direction: column;
          }
          .about-us-text07 {
            color: rgb(203, 12, 159);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .about-us-text09 {
            color: rgb(203, 12, 159);
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .about-us-container07 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-image17 {
            top: 0px;
            left: auto;
            width: 90%;
            bottom: auto;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .about-us-container08 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .about-us-image18 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .about-us-container09 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-text11 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .about-us-text13 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .about-us-text16 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .about-us-text19 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .about-us-profile {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .about-us-image19 {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .about-us-container10 {
            flex: 2;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .about-us-container11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-text20 {
            color: var(--dl-color-secondary-700);
            font-size: 1.5rem;
            font-style: normal;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-container12 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-text21 {
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text22 {
            color: var(--dl-color-secondary-700);
            font-style: normal;
            font-weight: 600;
          }
          .about-us-text24 {
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text25 {
            color: var(--dl-color-secondary-700);
            font-style: normal;
            font-weight: 600;
          }
          .about-us-text28 {
            color: var(--dl-color-secondary-700);
            font-style: normal;
            font-weight: 600;
          }
          .about-us-blog-posts {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .about-us-text31 {
            color: var(--dl-color-secondary-500);
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-container13 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-container14 {
            flex: 1;
            margin: var(--dl-space-space-unit);
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-card {
            flex: 1;
            width: 255px;
            display: flex;
            padding: var(--dl-space-space-unitandahalfunit);
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            background-size: cover;
            background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg');
          }
          .about-us-container15 {
            display: flex;
            z-index: 2;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-text34 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text35 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unit);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-us-container16 {
            display: flex;
            position: relative;
          }
          .about-us-button {
            color: var(--dl-color-blue-500);
            display: flex;
            padding-top: var(--dl-space-space-halfunit);
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .about-us-text36 {
            color: var(--dl-color-gray-white);
            margin-right: var(--dl-space-space-halfunit);
          }
          .about-us-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .about-us-container17 {
            top: auto;
            flex: 0 0 auto;
            left: 0px;
            right: auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .about-us-contact {
            width: 100%;
            max-width: 1320px;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .about-us-container18 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: row;
            background-color: var(--dl-color-gray-white);
          }
          .about-us-form {
            flex: 5;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .about-us-text37 {
            color: var(--dl-color-secondary-500);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-us-text39 {
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .about-us-form1 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .about-us-text40 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-textinput1 {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-textinput1:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .about-us-text41 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-textinput2 {
            width: 100%;
            height: 40px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-textinput2:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .about-us-text42 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-textarea {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-textarea:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .about-us-container19 {
            display: flex;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-container20 {
            display: flex;
          }
          .about-us-info {
            flex: 4;
            color: var(--dl-color-gray-white);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-sixunits);
            border-radius: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/curved5-1400w.jpg');
            border-top-right-radius: var(--dl-radius-radius-radius1);
            border-bottom-right-radius: var(--dl-radius-radius-radius1);
          }
          .about-us-container21 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            z-index: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-text46 {
            opacity: 0.8;
          }
          .about-us-container22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .about-us-container23 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon02 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-link {
            opacity: 0.8;
            text-decoration: none;
          }
          .about-us-container24 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon04 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-link1 {
            opacity: 0.8;
            text-decoration: none;
          }
          .about-us-container25 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-us-icon06 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-us-text47 {
            opacity: 0.8;
          }
          .about-us-container26 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .about-us-icon08 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .about-us-icon10 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .about-us-icon12 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .about-us-icon14 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .about-us-image20 {
            top: 0px;
            left: -1px;
            right: auto;
            width: 100px;
            z-index: 2;
            position: absolute;
            object-fit: cover;
          }
          .about-us-container27 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            opacity: 0.9;
            position: absolute;
            background-image: linear-gradient(310deg, #2152ff, #21d4fd);
          }
          @media (max-width: 991px) {
            .about-us-main {
              justify-content: flex-start;
            }
            .about-us-container01 {
              width: 70%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-tripleunit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-tripleunit);
            }
            .about-us-grid {
              top: 40%;
              left: auto;
              right: -6rem;
              bottom: -6rem;
            }
            .about-us-image {
              width: 120px;
            }
            .about-us-image01 {
              width: 120px;
            }
            .about-us-image02 {
              width: 120px;
            }
            .about-us-image03 {
              width: 120px;
            }
            .about-us-image04 {
              width: 120px;
            }
            .about-us-image05 {
              width: 120px;
            }
            .about-us-image06 {
              width: 120px;
            }
            .about-us-image07 {
              width: 120px;
            }
            .about-us-image08 {
              width: 120px;
            }
            .about-us-image09 {
              width: 120px;
            }
            .about-us-image10 {
              width: 120px;
            }
            .about-us-image11 {
              width: 120px;
            }
            .about-us-image12 {
              width: 120px;
            }
            .about-us-image13 {
              width: 120px;
            }
            .about-us-image14 {
              width: 120px;
              margin-top: -50px;
            }
            .about-us-image15 {
              width: 120px;
            }
            .about-us-container03 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .about-us-container04 {
              max-width: 80%;
            }
            .about-us-text04 {
              text-align: center;
            }
            .about-us-text06 {
              width: 50%;
            }
            .about-us-container10 {
              margin-left: var(--dl-space-space-tripleunit);
              margin-right: var(--dl-space-space-tripleunit);
            }
            .about-us-container14 {
              width: 100%;
            }
            .about-us-card {
              width: 100%;
            }
            .about-us-container18 {
              flex-direction: column;
            }
            .about-us-info {
              padding-left: 0px;
              border-top-right-radius: 0;
              border-bottom-left-radius: var(--dl-radius-radius-radius1);
            }
            .about-us-image20 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .about-us-container01 {
              width: 100%;
            }
            .about-us-grid {
              right: 0;
            }
            .about-us-image {
              width: 100px;
            }
            .about-us-image01 {
              width: 100px;
            }
            .about-us-image02 {
              width: 100px;
            }
            .about-us-image03 {
              width: 100px;
            }
            .about-us-image04 {
              width: 100px;
            }
            .about-us-image05 {
              width: 100px;
            }
            .about-us-image06 {
              width: 100px;
            }
            .about-us-image07 {
              width: 100px;
            }
            .about-us-image08 {
              width: 100px;
            }
            .about-us-image09 {
              width: 100px;
            }
            .about-us-image10 {
              width: 100px;
            }
            .about-us-image11 {
              width: 100px;
            }
            .about-us-image12 {
              width: 100px;
            }
            .about-us-image13 {
              width: 100px;
            }
            .about-us-image14 {
              width: 100px;
            }
            .about-us-image15 {
              width: 100px;
            }
            .about-us-container03 {
              max-width: 720px;
            }
            .about-us-container05 {
              align-items: center;
              flex-direction: column;
            }
            .about-us-container06 {
              width: 80%;
            }
            .about-us-image16 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .about-us-text06 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .about-us-image17 {
              display: none;
            }
            .about-us-container08 {
              width: 80%;
            }
            .about-us-image18 {
              display: none;
            }
            .about-us-profile {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-us-container10 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .about-us-container11 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-us-text20 {
              margin-top: var(--dl-space-space-unit);
            }
            .about-us-blog-posts {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .about-us-container14 {
              margin-top: var(--dl-space-space-doubleunit);
            }
            .about-us-contact {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .about-us-form {
              padding-top: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 479px) {
            .about-us-container02 {
              flex-direction: column;
            }
            .about-us-textinput {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
