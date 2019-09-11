import React, { useState } from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import YouTube from "react-youtube-embed"
import dayjs from "dayjs"
import Layout from "../layout"
import Grid from "../grid"
import AgentWidget from "../agent-widget"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import cn from "classnames"
import "dayjs/locale/ru"
import styles from "./ActorComponent.module.css"

dayjs.locale("ru")

const {
  container,
  lightBoxStyle,
  name,
  agentWidget,
  baseInfo,
  baseInfoList,
  baseInfoLabel,
  additionalInfo,
  titlePhoto,
  media,
  video,
  photo,
} = styles

const ActorComponent = ({
  data: {
    placehoder,
    strapiActor: {
      name_ru,
      name_en,
      birth_date,
      height,
      size,
      video_intro,
      video_showreal,
      title_photo,
      drive_lisence,
      photos,
      content_ru,
      content_en,
      agent,
    },
  },
}) => {
  const [lightBoxIsOpen, openLightBox] = useState(false)
  const [photoIndex, changeIndex] = useState(0)

  const openCloseLightBox = () => {
    openLightBox(!lightBoxIsOpen)
  }

  const handleChangeIndex = photoIndex => {
    changeIndex(photoIndex)
    !lightBoxIsOpen ? openLightBox(true) : null
  }

  const closeLightBox = () => {
    openLightBox(false)
    changeIndex(0)
  }

  return (
    <>
      <Layout>
        <div className={container}>
          <h1 className={name}>{name_ru || name_en}</h1>
          <div className={titlePhoto} onClick={openCloseLightBox}>
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
              {photos
                ? photos.map(({ url, id }, index) => (
                    <img
                      className={photo}
                      key={id}
                      src={url}
                      alt={name_ru}
                      onClick={() => handleChangeIndex(index)}
                    />
                  ))
                : null}
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
                  <h2>шоурил</h2>
                  <YouTube id={video_showreal} />
                </div>
              ) : null}
            </Grid>
          </div>
        </div>
      </Layout>
      {lightBoxIsOpen && (
        <Lightbox
          mainSrc={photos[photoIndex].url}
          nextSrc={photos[(photoIndex + 1) % photos.length].url}
          prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].url}
          onCloseRequest={closeLightBox}
          reactModalStyle={{ overlay: { zIndex: 1100 } }}
          enableZoom={false}
          wrapperClassName={lightBoxStyle}
          onMovePrevRequest={() =>
            handleChangeIndex((photoIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() => handleChangeIndex((photoIndex + 1) % photos.length)}
        />
      )}
    </>
  )
}

export default ActorComponent
