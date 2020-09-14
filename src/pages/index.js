import React from "react";

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/tailwind.css";

const Homepage = () => {
  return (
    <>
      <main className="relative bg-blue-150 w-full md:w-container h-screen mx-auto p-3">
        <SEO
          title="Homepage"
        />
        <Header />
        <div className="pt-10">
          Hello World, my name is Andrel<br/>
          My complete name is Andrel Karunia Sitanggang<br />
        </div>
        <Footer
          isActive="home"
        />
      </main>
    </>
  )
};

export default Homepage;