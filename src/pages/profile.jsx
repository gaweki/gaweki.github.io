import React from "react";

import Header from "../components/header"
import Footer from "../components/footer"

import "../components/tailwind.css";

const Profile = () => {
  return (
    <>
      <main className="bg-blue-150 w-5/12 h-screen mx-auto">
        <Header />
        <div className="pt-10">
          Hello World, my name is Andrel
        </div>
        <Footer
          isActive="profile"
        />
      </main>
    </>
  )
};

export default Profile;