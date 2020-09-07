import React from "react";

import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/tailwind.css";

const Homepage = () => {
  return (
    <>
      <main className="bg-blue-150 w-5/12 h-screen mx-auto">
        <SEO
          title="Homepage"
        />
        <Header />
        <div className="pt-10">
          Hello World, my name is Andrel<br/>
          My complete name is Andrel Karunia Sitanggang<br />
          Education: <br/>
          andrel.sitanggang@gmail.com <br/>
          D3 Gadjah Mada University, 2013 - 2017<br/>
          S1 Informatics Engineering, 2018 - Now <br />
          Hobby: <br />
          Reading <br />
          Swimming <br />
          Motorcycle Riding <br />
          Current company <br />
          PT Distribusi Indonesia Unggul <br />
          Referrences<br />
          Irfan Maulana - Head Of Technology Tokodistributor.com <br />
          Sosmed Link: <br />
          https://twitter.com/functionandrel <br />
          https://id-id.facebook.com/people/Andrel-Karunia-Sitanggang/100004816399261 <br />
          https://www.instagram.com/andrelst.g/<br />
        </div>
        <Footer
          isActive="home"
        />
      </main>
    </>
  )
};

export default Homepage;