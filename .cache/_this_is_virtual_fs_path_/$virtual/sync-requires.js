
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("/Users/andrel/gaweki-website/src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/andrel/gaweki-website/src/pages/index.jsx")),
  "component---src-pages-profile-jsx": preferDefault(require("/Users/andrel/gaweki-website/src/pages/profile.jsx")),
  "component---src-pages-projects-jsx": preferDefault(require("/Users/andrel/gaweki-website/src/pages/projects.jsx"))
}

