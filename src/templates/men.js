import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { createUrl } from "../components/utils"
import Grid from "../components/grid"
import CardActor from "../components/card-actor"
import SEO from "../components/seo"

const MensPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Актёры</h1>
    <Grid>
      {data.allStrapiActor.edges.map(
        ({ node: { name_en, name_ru, id, title_photo } }) => (
          <CardActor
            key={id}
            url={`/${createUrl(name_en)}`}
            alt={`${"aктёр " + name_ru}`}
            imgSrc={
              title_photo.childImageSharp.fluid ||
              data.placehoder.childImageSharp.fluid
            }
            name={name_ru}
          />
        )
      )}
    </Grid>
  </Layout>
)

export default MensPage

export const pageQuery = graphql`
  query MenQuery {
    allStrapiActor(filter: { gender: { eq: "male" } }) {
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
  }
`
