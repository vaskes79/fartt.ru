import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { createUrl, Li } from "../utils"
import Layout from "../layout"
import { faFacebookF, faInstagram, faVk, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import styles from "./AgentViewPage.module.css"

const {
  container,
  name,
  agentWidget,
  baseInfo,
  baseInfoList,
  baseInfoLabel,
  additionalInfo,
  titlePhoto,
  socialList,
} = styles

const AgentViewPage = ({
  data: {
    strapiAgent: {
      base_img,
      actors,
      name_ru,
      phone,
      email,
      facebook,
      vkontakte,
      instagram,
      linkedin,
    },
  },
}) => (
  <Layout>
    <div className={container}>
      <h1 className={name}>{name_ru}</h1>
      <div className={titlePhoto}>
        {base_img ? (
          <Img fluid={base_img.childImageSharp.fluid || placehoder.childImageSharp.fluid} />
        ) : null}
      </div>
      <div className={baseInfo}>
        <ul className={baseInfoList}>
          <li>
            <em>телефон: </em>
            <b>{phone}</b>
          </li>
          <li>
            <em>эл. почта: </em>
            <b> {email}</b>
          </li>
          <li>
            <em> соц. сети: </em>
            <ul className={socialList}>
              {vkontakte ? <Li url={vkontakte} icon={faVk} /> : null}
              {facebook ? <Li url={facebook} icon={faFacebookF} /> : null}
              {instagram ? <Li url={instagram} icon={faInstagram} /> : null}
              {linkedin ? <Li url={linkedin} icon={faLinkedin} /> : null}
            </ul>
          </li>
        </ul>
      </div>
      <div className={additionalInfo}>
        <h2>актёры</h2>
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <Link to={`/${createUrl(actor.name_en)}`}>{actor.name_ru}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default AgentViewPage
