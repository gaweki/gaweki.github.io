import React from "react";

import Header from "../components/header"
import Body from "../components/profile/body"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/tailwind.css";

const Profile = () => {
  return (
    <>
      <main className="relative bg-blue-150 w-full md:w-container h-screen mx-auto p-3">
        <SEO
          title="Profile"
          description="My profile"
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