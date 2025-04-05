/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import StickyFooterBar from "./StickyFooterBar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Calculate approximate height of header + sticky bar + footer padding for minHeight
  const approxHeaderHeight = 70; // Estimate header height
  const approxStickyBarHeight = 70; // Estimate sticky bar height
  const approxFooterPadding = 30; // Reduced padding since footer content moved to sticky bar
  const totalOffset = approxHeaderHeight + approxStickyBarHeight + approxFooterPadding;
  const stickyBarPaddingBottom = `calc(${approxStickyBarHeight}px + 2rem)`; // Add extra space

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          // Keep default for smaller screens, increase for larger
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          minHeight: `calc(100vh - ${approxHeaderHeight + approxFooterPadding}px)`,
          display: `flex`,
          flexDirection: `column`,
          paddingBottom: stickyBarPaddingBottom,
          // Apply larger max-width using a style tag for media query
        }}
      >
        {/* Add style tag to override max-width on larger screens */}
        <style>{`
          @media (min-width: 1360px) { /* Adjust breakpoint as needed */
            div[style*="--size-content"] {
              max-width: 1280px !important; /* Increase max-width */
            }
          }
        `}</style>
        <main style={{ flexGrow: 1 }}>{children}</main>
        {/* Footer content moved to StickyFooterBar */}
      </div>
      <StickyFooterBar />
    </>
  )
}

export default Layout
