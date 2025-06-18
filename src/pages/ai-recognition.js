import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AiRecognitionFeature from "../components/features/AiRecognitionFeature"

const AiRecognitionPage = () => (
  <Layout>
    <AiRecognitionFeature />
  </Layout>
)

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo title="AI Recognition - YAGA" />

export default AiRecognitionPage

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