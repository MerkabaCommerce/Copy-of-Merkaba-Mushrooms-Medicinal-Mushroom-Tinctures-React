import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
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
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="component2-text12">
                For a start, it does not automatically follow that a record
                amount of ice will melt this summer. More important for
                determining the size of the annual thaw is the state of the
                weather as the midnight sun approaches and temperatures rise.
                But over the more than 30 years of satellite records, scientists
                have observed a clear pattern of decline, decade-by-decade.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className="component2-text15">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </span>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
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
