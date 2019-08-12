import React from "react"
import { graphql } from "gatsby"
import AgentViewPage from "../components/agent-view"

const AgentTemplate = ({ data }) => <AgentViewPage data={data} />

export default AgentTemplate

export const query = graphql`
  query AgentTemplate($id: String!) {
    strapiAgent(id: { eq: $id }) {
      name_ru
      facebook
      instagram
      linkedin
      vkontakte
      phone
      email
      base_img {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      actors {
        id
        name_ru
        name_en
      }
    }
  }
`
