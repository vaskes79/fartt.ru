import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import YouTube from "react-youtube-embed"
import dayjs from "dayjs"
import Layout from "../layout"
import Grid from "../grid"
import AgentWidget from "../agent-widget"
import cn from "classnames"
import "dayjs/locale/ru"
import styles from "./ActorComponent.module.css"

dayjs.locale("ru")

const {
  container,
  name,
  agentWidget,
  baseInfo,
  baseInfoList,
  baseInfoLabel,
  additionalInfo,
  titlePhoto,
  media,
  video,
} = styles

const ActorComponent = ({
  data: {
    placehoder,
    strapiActor: {
      name_ru,
      birth_date,
      height,
      size,
      video_intro,
      video_showreal,
      title_photo,
      drive_lisence,
      photos,
      content_ru,
      agent,
    },
  },
}) => (
  <Layout>
    <div className={container}>
      <h1 className={name}>{name_ru}</h1>
      <div className={titlePhoto}>
        <Img fluid={title_photo.childImageSharp.fluid || placehoder.childImageSharp.fluid} />
      </div>
      <div className={agentWidget}>
        <AgentWidget agent={agent} />
      </div>
      <div className={baseInfo}>
        <ul className={baseInfoList}>
          <li>
            <em>возраст: </em>
            <b>{dayjs(Date.now()).diff(birth_date, "year")}</b>
          </li>
          <li>
            <em>рост: </em>
            <b> {height}</b>
          </li>
          <li>
            <em>размер: </em>
            <b>{size}</b>
          </li>
          {drive_lisence ? (
            <li>
              <em>права:</em>
              <b>есть</b>
            </li>
          ) : null}
        </ul>
      </div>
      <div className={additionalInfo}>
        {content_ru ? <ReactMarkdown escapeHtml={false} source={content_ru} /> : null}
      </div>
      <div className={media}>
        <Grid>
          {photos ? photos.map(({ url, id }) => <img key={id} src={url} alt={name_ru} />) : null}
        </Grid>
        <Grid column="twoColumn">
          {video_intro ? (
            <div className={cn("video", video)}>
              <h2>видео визитка</h2>
              <YouTube id={video_intro} />
            </div>
          ) : null}
          {video_showreal ? (
            <div className={video}>
              <h2>Шоуреал</h2>
              <YouTube id={video_showreal} />
            </div>
          ) : null}
        </Grid>
      </div>
    </div>
  </Layout>
)

export default ActorComponent
