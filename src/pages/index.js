import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { createUrl } from "../components/utils"
import CardActor from "../components/card-actor"
import Grid from "../components/grid"
import ReactMarkdown from "react-markdown"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    setup: { title_ru, intro_ru, description_ru },
    allStrapiActor: { edges: actors },
  },
}) => (
  <Layout path={true}>
    <SEO title={title_ru} description={description_ru} />
    <ReactMarkdown escapeHtml={false} source={intro_ru} />
    <Grid>
      {actors.map(({ node: { id, name_ru, name_en, gender, title_photo } }) => (
        <CardActor
          key={id}
          url={`/${createUrl(name_en)}`}
          alt={`${gender === "female" ? "актриса " + name_ru : "aктёр " + name_ru}`}
          imgSrc={title_photo.childImageSharp.fluid || data.placehoder.childImageSharp.fluid}
          name={name_ru}
        />
      ))}
    </Grid>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiActor {
      edges {
        node {
          id
          name_ru
          name_en
          gender
          title_photo {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 750) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    setup: strapiSetup(id: { eq: "Setup_5d502e664d43480017e3da7c" }) {
      title_ru
      intro_ru
      description_ru
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
