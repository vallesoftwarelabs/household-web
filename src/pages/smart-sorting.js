import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SmartSortingFeature from "../components/features/SmartSortingFeature"

const SmartSortingPage = () => (
  <Layout>
    <SmartSortingFeature />
  </Layout>
)

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo title="Smart Sorting - YAGA" />

export default SmartSortingPage

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