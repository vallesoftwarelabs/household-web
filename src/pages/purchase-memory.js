import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PurchaseMemoryFeature from "../components/features/PurchaseMemoryFeature"

const PurchaseMemoryPage = () => (
  <Layout>
    <PurchaseMemoryFeature />
  </Layout>
)

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo title="Purchase Memory - YAGA" />

export default PurchaseMemoryPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
` 