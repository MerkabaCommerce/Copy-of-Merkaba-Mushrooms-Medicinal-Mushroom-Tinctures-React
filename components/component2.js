import React from 'react'

import PropTypes from 'prop-types'

const Component2 = (props) => {
  return (
    <>
      <section className="component2-container">
        <div className="component2-container1">
          <span className="component2-text">{props.text}</span>
          <h1 className="component2-text01">{props.heading}</h1>
        </div>
        <div className="component2-container2">
          <div className="component2-container3">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="component2-image"
            />
            <span className="component2-text02 Small">
              <span className="component2-text03">
                &quot;Over the span of the satellite record, Arctic sea ice has
                been declining significantly, while sea ice in the Antarctichas
                increased very slightly&quot;
              </span>
              <br></br>
              <span className="component2-text05">-NOAA</span>
            </span>
            <div className="component2-container4">
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="component2-image1"
              />
            </div>
          </div>
          <div className="component2-container5">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="component2-image2"
            />
            <div className="component2-container6">
              <h3 className="HeadingTwo">
                <span className="component2-text07">
                  So what does the new record for the lowest level of winter ice
                  actually mean
                </span>
              </h3>
              <p>
                <br></br>
                <span className="component2-text09">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="component2-text12">
                  For a start, it does not automatically follow that a record
                  amount of ice will melt this summer. More important for
                  determining the size of the annual thaw is the state of the
                  weather as the midnight sun approaches and temperatures rise.
                  But over the more than 30 years of satellite records,
                  scientists have observed a clear pattern of decline,
                  decade-by-decade.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="component2-text15">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .component2-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .component2-container1 {
            display: flex;
            max-width: 70%;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .component2-text {
            max-width: 600px;
            text-align: center;
            font-weight: bold;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .component2-text01 {
            width: 100%;
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
          .component2-container2 {
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
          .component2-container3 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component2-image {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .component2-text02 {
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
          .component2-text03 {
            color: rgb(203, 12, 159);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .component2-text05 {
            color: rgb(203, 12, 159);
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .component2-container4 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .component2-image1 {
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
          .component2-container5 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .component2-image2 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .component2-container6 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .component2-text07 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .component2-text09 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .component2-text12 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .component2-text15 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          @media (max-width: 991px) {
            .component2-container {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .component2-container1 {
              max-width: 80%;
            }
            .component2-text {
              text-align: center;
            }
            .component2-text02 {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .component2-container {
              max-width: 720px;
            }
            .component2-container2 {
              align-items: center;
              flex-direction: column;
            }
            .component2-container3 {
              width: 80%;
            }
            .component2-image {
              margin-left: 0px;
              margin-right: 0px;
            }
            .component2-text02 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .component2-image1 {
              display: none;
            }
            .component2-container5 {
              width: 80%;
            }
            .component2-image2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Component2.defaultProps = {
  image_alt2: 'image',
  heading:
    'The South’s Leading Medicinal Mushroom Company Providing Quality Mushroom Tinctures',
  image_src1:
    'https://images.unsplash.com/photo-1654011021856-5d590a4f6770?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYzfHxtdXNocm9vbSUyMGZvcmFnaW5nfGVufDB8fHx8MTY2ODYyNDY2MA&ixlib=rb-4.0.3&w=1100',
  image_alt1: 'image',
  text: 'MEET MERKABA',
  image_src:
    'https://images.unsplash.com/photo-1532634993-15f421e42ec0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGxhYnJhdG9yeXxlbnwwfHx8fDE2Njg2MjQ2MDM&ixlib=rb-4.0.3&w=1100',
  image_src2:
    'https://images.unsplash.com/photo-1634326599007-a108c3f5abcd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGNvcmR5Y2Vwc3xlbnwwfHx8fDE2Njg2MjQ2ODM&ixlib=rb-4.0.3&w=1000',
  image_alt: 'image',
}

Component2.propTypes = {
  image_alt2: PropTypes.string,
  heading: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component2
