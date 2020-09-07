import React from "react";

const images = [
  {
    name: "Svelte Logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/64px-Svelte_Logo.svg.png"
  },
  {
    name: "Vuejs Logo",
    src: "https://www.telerik.com/sfimages/default-source/blogs/2018/2018-02/vue-js.png"
  },
  {
    name: "Reactjs Logo",
    src: "http://ih1.redbubble.net/image.32576156.9850/sticker,375x360.png"
  },
  {
    name: "Tailwindcss Logo",
    src: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
  },
  {
    name: "Gatsbyjs Logo",
    src: "https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
  },
  {
    name: "Vuetify Logo",
    src: "https://seeklogo.com/images/V/vuetify-logo-3BCF73C928-seeklogo.com.png"
  },
]

const Header = () => (
  <nav className="fixed top-0 left-0 right-0 mx-auto flex bg-white h-10 text-sm items-center w-full md:w-container justify-center">
    <span>Andrel Karunia Sitanggang </span>
    <span className="w-1 h-1 bg-black rounded-full mx-2"></span>
    <span>Frontend Developer</span>
    <span className="w-1 h-1 bg-black rounded-full mx-2"></span>
    <div className="flex items-center">
      {
        images.map((image, i) => <img className="w-6 h-6 rounded-full m-0 mx-1" key={i} src={image.src} alt={image.name}/>)
      }
    </div>
  </nav>
)

export default Header;