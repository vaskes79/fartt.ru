import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

const PageTemplate = ({
  data: {
    strapiPage: { title_ru, intro_ru, content_ru },
  },
}) => (
  <Layout>
    <h1>{title_ru}</h1>
    <p>{intro_ru}</p>
    <ReactMarkdown escapeHtml={false} source={content_ru} />
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplate($id: String!) {
    strapiPage(id: { eq: $id }) {
      title_ru
      intro_ru
      content_ru
    }
  }
`
