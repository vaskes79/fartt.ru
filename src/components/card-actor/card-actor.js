import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import cn from "classnames"

import styles from "./cardactor.module.css"

const { container, link, image, title, description } = styles

const CardActor = ({ url, name, imgSrc, alt }) => {
  return (
    <article className={cn("card-actor", container)}>
      <Link to={url} className={link}>
        <Img className={image} alt={alt} fluid={imgSrc} />
        <div className={description}>
          <h4 className={title}>{name}</h4>
        </div>
      </Link>
    </article>
  )
}

CardActor.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}
// Nav.defaultProps = {}

export default CardActor
