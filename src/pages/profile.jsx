import React from "react";

import Header from "../components/header"
import Body from "../components/profile/body"
import Footer from "../components/footer"
import SEO from "../components/seo"

import "../components/tailwind.css";

const Profile = () => {
  return (
    <>
      <main className="bg-blue-150 w-container h-screen mx-auto">
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