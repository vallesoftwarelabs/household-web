import * as React from "react"
// Remove unused imports like Link, StaticImage, styles
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero" // Import the new Hero component
import Features from "../components/Features"; // Import the new Features component
import OurPromise from "../components/OurPromise"; // Import the OurPromise component
import FAQ from "../components/FAQ"; // Import the FAQ component
// Removed SpecialOffers import
// import * as styles from "../components/index.module.css"

// Remove default starter content (links, samplePageLinks, moreLinks)

const IndexPage = () => (
  <Layout>
    {/* Keep SEO component */}
    <Hero /> {/* Render the Hero component */}
    <Features /> {/* Render the Features component */}
    <OurPromise /> {/* Render the OurPromise component */}
    <FAQ /> {/* Render the FAQ component */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="YAGA" /> // Keep Head export

export default IndexPage
