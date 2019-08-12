import React from "react"
import EmailForm from "./email-form"
import Social from "./social"
import Copyright from "./copyright"
import cn from "classnames"
import styles from "./footer.module.css"

const { footer, footerPage, inner, left, right, bottom, innerHome } = styles

const Footer = () => {
  const path = window.location.pathname === "/"

  return (
    <footer className={path ? footer : cn(footer, footerPage)}>
      <div className={path ? innerHome : inner}>
        {path ? (
          <div className={left}>
            {" "}
            <EmailForm />
          </div>
        ) : null}
        {path ? (
          <div className={right}>
            <Social />
          </div>
        ) : null}
        <div className={bottom}>
          <Copyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer
