import React, { useState } from "react"
import { Link } from "gatsby"
import cn from "classnames"

import menuStyles from "./nav.module.css"

const { closeInner, overlay, container, openMenu, title, inner, list, close } = menuStyles

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className={cn({ [openMenu]: isVisible }, "nav-menu")}>
      <div className={overlay} onClick={toggleVisible}></div>
      <nav className={container} id="menu">
        <div className={inner} onClick={toggleVisible}>
          <h2 className={title}>меню</h2>
          <ul className={list}>
            <li>
              <Link to="/">главная</Link>
            </li>
            <li>
              <Link to="/men">актёры</Link>
            </li>
            <li>
              <Link to="/womens">актрисы</Link>
            </li>
            <li>
              <Link to="/about-us">o нас</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={close}>
        <button
          className={cn("hamburger", "hamburger--spin", {
            "is-active": isVisible,
          })}
          type="button"
          onClick={toggleVisible}
        >
          <span className="hamburger-box">
            <span className={cn("hamburger-inner", closeInner)}>{""}</span>
          </span>
        </button>
      </div>
    </div>
  )
}

// Nav.propTypes = {}

// Nav.defaultProps = {}

export default Nav
