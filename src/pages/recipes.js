import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import RecipesFeature from "../components/features/RecipesFeature"

const RecipesPage = () => (
  <Layout>
    <RecipesFeature />
  </Layout>
)

export const Head = () => <Seo title="Recipes - YAGA" />

export default RecipesPage

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


