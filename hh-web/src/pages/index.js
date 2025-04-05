import * as React from "react"
// Remove unused imports like Link, StaticImage, styles
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero" // Import the new Hero component
import Features from "../components/Features"; // Import the new Features component
import HowItWorks from "../components/HowItWorks"; // Import the HowItWorks component
import FeaturedCategories from "../components/FeaturedCategories"; // Import FeaturedCategories
// Removed SpecialOffers import
import DownloadApp from "../components/DownloadApp"; // Import DownloadApp
// import * as styles from "../components/index.module.css"

// Remove default starter content (links, samplePageLinks, moreLinks)

const IndexPage = () => (
  <Layout>
    {/* Keep SEO component */}
    <Hero /> {/* Render the Hero component */}
    <Features /> {/* Render the Features component */}
    <HowItWorks /> {/* Render the HowItWorks component */}
    <FeaturedCategories /> {/* Render FeaturedCategories */}
    {/* Removed SpecialOffers component */}
    <DownloadApp /> {/* Render DownloadApp */}
    {/* Remove all default starter JSX */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" /> // Keep Head export

export default IndexPage
