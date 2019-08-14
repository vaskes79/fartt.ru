import React from "react"
import Icon from "./icon-comp"

export const createUrl = rowUrl =>
  rowUrl
    .trim()
    .toLowerCase()
    .replace(/\s+/, "-")

export const Li = ({ url = "/", icon, linkStyles, ...props }) => (
  <li {...props}>
    <a href={url} className={linkStyles} target="_blank" rel="noopener noreferrer">
      <Icon nameIcon={icon} />
    </a>
  </li>
)
