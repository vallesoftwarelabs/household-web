/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"

import Header from "./header"
import StickyFooterBar from "./StickyFooterBar"
import { ThemeProvider } from "../context/ThemeContext"
import "./layout.css"

const Layout = ({ children }) => {
  // Manual language detection and redirect
  React.useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      const userChoice = localStorage.getItem('userLanguageChoice');
      
      // Only auto-redirect if:
      // 1. We're on the root path
      // 2. User hasn't made an explicit language choice
      // 3. Browser language is Norwegian
      if (currentPath === '/' && 
          !userChoice && 
          (browserLang.startsWith('nb') || browserLang.startsWith('no'))) {
        navigate('/nb/', { replace: true });
      }
    }
  }, []);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Simplified height calculations
  const approxHeaderHeight = 70; // Estimate header height
  const approxFooterPadding = 30; // Footer padding (can be adjusted or removed if StickyFooterBar has own padding)

  return (
    <ThemeProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          paddingTop: `var(--size-gutter)`,
          paddingLeft: `var(--size-gutter)`,
          paddingRight: `var(--size-gutter)`,
          paddingBottom: 0,
          minHeight: `calc(100vh - ${approxHeaderHeight}px)`,
          display: `flex`,
          flexDirection: `column`,
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
        {/* Footer is now part of the flex column flow */}
      </div>
      <StickyFooterBar />
    </ThemeProvider>
  )
}

export default Layout
