import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MealPlanningFeature from "../components/features/MealPlanningFeature"

const MealPlanningPage = () => (
  <Layout>
    <MealPlanningFeature />
  </Layout>
)

export const Head = () => <Seo title="Meal Planning - YAGA" />

export default MealPlanningPage

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


