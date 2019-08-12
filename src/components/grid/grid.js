import React from "react"
import cn from "classnames"

import style from "./grid.module.css"

const { container, twoColumn } = style

const Grid = ({ children, column }) => {
  return (
    <section className={cn("grid-layout", container, { [twoColumn]: column })}>{children}</section>
  )
}

export default Grid
