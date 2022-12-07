import React from 'react'

import PropTypes from 'prop-types'

import NextButton from './next-button'
import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className="blog-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-image"
      />
      <h5 className="blog-card-text">{props.new_prop}</h5>
      <span>{props.description}</span>
      <NextButton button="Read more"></NextButton>
    </div>
  )
}

BlogCard.defaultProps = {
  image_alt: 'image',
  description:
    "Merkaba Mushroom's are paving the way to Cure the Heart of America by Bringing Awareness and Providing an Accesible Way for any Person to Benefit off of Medicinal Mushrooms.",
  new_prop: 'Merkaba raised $65 million in Grants',
  image_src:
    'https://images.unsplash.com/photo-1566216867955-5b2e8c77e45f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHx0aW5jdHVyZXxlbnwwfHx8fDE2Njg4MDkyOTA&ixlib=rb-4.0.3&w=300',
}

BlogCard.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  new_prop: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogCard
