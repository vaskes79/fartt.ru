import React from "react"
import styles from "./copyright.module.css"
const { container } = styles

const Copyright = props => (
  <div className={container}>
    © {new Date().getFullYear()} built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    {` `}
    and
    {` `}
    <a href="https://www.strapi.io">Strapi</a>
    {` `}
    <a href="https://github.com/vaskes79">developer Vasily Guzov</a>
  </div>
)

export default Copyright
