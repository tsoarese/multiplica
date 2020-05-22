// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BoxCopy from "../components/boxcopy"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <div className="containerFull">
       <BoxCopy></BoxCopy>
    </div>
  </Layout>
)

export default SecondPage
