import React from "react"
import { graphql } from "gatsby"
import ActorComponent from "../components/actor-component"

const ActorTemplate = ({ data }) => <ActorComponent data={data} />

export default ActorTemplate

export const query = graphql`
  query ActorTemplate($id: String!) {
    strapiActor(id: { eq: $id }) {
      name_ru
      name_en
      birth_date
      height
      size
      video_intro
      video_showreal
      content_ru
      drive_lisence
      content_en
      title_photo {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photos {
        url
        id
      }
      agent {
        id
        name_ru
        name_en
        phone
        facebook
        instagram
        vkontakte
        linkedin
        email
      }
    }
    placehoder: file(name: { eq: "user-placeholder" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
