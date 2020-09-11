import React from "react";
import jsLogo from "../images/gatsby-icon.png"

const images = [
  {
    name: "Javascript Logo",
    src: jsLogo
  }
]

const Header = () => (
  <nav className="fixed top-0 left-0 right-0 mx-auto flex bg-white h-10 items-center w-full md:w-container justify-center shadow-bottom-default">
    <span>Andrel Karunia Sitanggang </span>
    <span className="w-1 h-1 bg-black rounded-full mx-2"></span>
    <div className="flex items-center">
      {
        images.map((image, i) => <img className="w-6 h-6 rounded-full m-0 mx-1" key={i} src={image.src} alt={image.name} />)
      }
    </div>
  </nav>
)

export default Header;