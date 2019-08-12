import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <ul>
      <li>{process.env.EMAILJS_RECEIVER}</li>
      <li>{process.env.EMAILJS_UID}</li>
      <li>{process.env.EMAILJS_TEMPLATEID}</li>
      <li>{process.env.API_URL}</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
