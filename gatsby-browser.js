/**
 * Implement Gatsby's Browser APIs in this file.
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Import global styles
import "./src/styles/design-system.css"
import "./src/styles/page-transition.css"
import "./src/styles/mobile-optimization.css"

// Import animation utilities
import { handlePageTransition, initAnimationsIfAllowed } from "./src/utils/animations"

/**
 * Runs when the initial (but not subsequent) page loads
 */
export const onInitialClientRender = () => {
  // Initialize animations after the page has loaded
  initAnimationsIfAllowed()
}

/**
 * Runs when the client route changes
 */
export const onRouteUpdate = ({ location, prevLocation }) => {
  // Handle page transitions
  if (prevLocation) {
    handlePageTransition(location)
  }
  
  // Re-initialize scroll-based animations for new page
  setTimeout(() => {
    initAnimationsIfAllowed()
  }, 100)
}

/**
 * Allows customization of scrolling behavior on route updates
 */
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  // Check for saved scroll position (browser back/forward)
  const currentPosition = getSavedScrollPosition(location)
  
  // If there's a saved position, use it
  if (currentPosition) {
    window.setTimeout(() => window.scrollTo(...currentPosition), 10)
    return false
  }

  // Scroll to top with delay to allow page transition
  window.setTimeout(() => window.scrollTo(0, 0), 10)
  return false
}
