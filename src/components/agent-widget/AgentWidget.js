import React from "react"
import { Link } from "gatsby"
import { Li, createUrl } from "../utils"
import styles from "./AgentWidget.module.css"
import { faEnvelope, faPhone, faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faVk, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { isMobile } from "react-device-detect"

const { container, icons, label, nameStyle, showDataView } = styles

const AgentWidget = ({
  agent: { name_ru, name_en, phone, email, facebook, vkontakte, instagram, linkedin },
}) => {
  let viewBox = React.createRef()
  const printPage = e => {
    e.preventDefault()
    window.print()
  }

  function showData(e) {
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
    <div className={container}>
      <em className={label}>агент</em>
      <h4 className={nameStyle}>
        <Link to={`/agent/${createUrl(name_en)}`}>{name_ru}</Link>
      </h4>
      <ul className={icons}>
        {facebook ? <Li url={facebook} icon={faFacebookF} /> : null}
        {instagram ? <Li url={instagram} icon={faInstagram} /> : null}
        {vkontakte ? <Li url={vkontakte} icon={faVk} /> : null}
        {linkedin ? <Li url={linkedin} icon={faLinkedin} /> : null}
        {isMobile ? (
          <Li url={`mailto:${email}`} icon={faEnvelope} />
        ) : (
          <Li url={`mailto:${email}`} icon={faEnvelope} onClick={showData} />
        )}
        {isMobile ? (
          <Li url={`tel:${phone}`} icon={faPhone} />
        ) : (
          <Li url={`tel:${phone}`} icon={faPhone} onClick={showData} />
        )}
        <Li icon={faFileDownload} onClick={printPage} />
      </ul>
      <input className={showDataView} ref={viewBox} />
    </div>
  )
}

export default AgentWidget
