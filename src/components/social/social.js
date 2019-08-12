import React from "react"
import { Li } from "../utils"
import { StaticQuery, graphql } from "gatsby"
import cn from "classnames"
import styles from "./social.module.css"
import { isMobile } from "react-device-detect"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faVk, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const { container, icons, title, link, liWrap, showDataView } = styles

export default () => (
  <StaticQuery
    query={graphql`
      query SetupQuery {
        strapiSetup {
          facebook
          linkedin
          instagram
          vkontakte
          email
          phone
        }
      }
    `}
    render={({ strapiSetup: { facebook, instagram, vkontakte, linkedin, phone, email } }) => {
      let viewBox = React.createRef()

      const showData = e => {
        e.preventDefault()
        const vb = viewBox.current
        let currentValue = null
        const data = e.currentTarget.childNodes[0].getAttribute("href")
        if (/mailto*/.test(data)) currentValue = email
        if (/tel*/.test(data)) currentValue = phone
        vb.value = currentValue
        vb.select()
        document.execCommand("copy")
        alert(`${currentValue} скопирован в буфер обмена`)
      }

      return (
        <section className={container}>
          <h2 className={title}>о нас</h2>
          <ul className={icons}>
            {facebook ? (
              <Li url={facebook} className={liWrap} linkStyles={link} icon={faFacebookF} />
            ) : null}
            {instagram ? (
              <Li url={instagram} className={liWrap} linkStyles={link} icon={faInstagram} />
            ) : null}
            {vkontakte ? (
              <Li url={vkontakte} className={liWrap} linkStyles={link} icon={faVk} />
            ) : null}
            {linkedin ? (
              <Li url={linkedin} className={liWrap} linkStyles={link} icon={faLinkedin} />
            ) : null}

            {isMobile ? (
              <Li url={`mailto:${email}`} className={liWrap} linkStyles={link} icon={faEnvelope} />
            ) : (
              <Li
                url={`mailto:${email}`}
                className={liWrap}
                linkStyles={link}
                icon={faEnvelope}
                onClick={showData}
              />
            )}
            {isMobile ? (
              <Li url={`tel:${phone}`} className={liWrap} linkStyles={link} icon={faPhone} />
            ) : (
              <Li
                url={`tel:${phone}`}
                className={liWrap}
                linkStyles={link}
                icon={faPhone}
                onClick={showData}
              />
            )}
          </ul>
          <input className={showDataView} ref={viewBox} />
        </section>
      )
    }}
  />
)
