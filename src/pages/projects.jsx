import React from "react";

import Header from "../components/header"
import Body from "../components/projects/body"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/tailwind.css";
import 'typeface-pt-sans';

const Projects = () => {
  return (
    <>
      <main className="relative bg-blue-150 w-full md:w-container h-screen mx-auto p-3 overflow-auto pb-16 font-pt-sans">
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