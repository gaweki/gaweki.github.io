import React from "react";

import Header from "../components/header"
import Body from "../components/profile/body"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/tailwind.css";
import 'typeface-pt-sans';

const Profile = () => {
  return (
    <>
      <main className="relative bg-blue-150 w-full md:w-container h-screen mx-auto p-3 overflow-auto pb-16 font-pt-sans">
        <SEO
          title="Profile"
          description="Andrel Karunia Sitanggang: My profile"
        />
        <Header />
        <Body />
        <Footer
          isActive="profile"
        />
      </main>
    </>
  )
};

export default Profile;