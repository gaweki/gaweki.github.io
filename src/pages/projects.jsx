import React from "react";

import Header from "../components/header"
import Body from "../components/projects/body"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/tailwind.css";

const Projects = () => {
  return (
    <>
      <main className="bg-blue-150 w-full md:w-container h-screen mx-auto">
        <SEO
          title="Projects"
          description="My works"
        />
        <Header />
        <Body />
        <Footer
          isActive="projects"
        />
      </main>
    </>
  )
};

export default Projects;