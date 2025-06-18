import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AnalyticsFeature from "../components/features/AnalyticsFeature"

const AnalyticsPage = () => (
  <Layout>
    <AnalyticsFeature />
  </Layout>
)

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo title="Analytics - YAGA" />

export default AnalyticsPage

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