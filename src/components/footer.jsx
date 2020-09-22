import React from "react";
import { Link } from "gatsby"
import Contact from "./contact"


let footers = [
  {
    url: "/projects/",
    tabName: "projects",
    d: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
  },
  {
    url: "/",
    tabName: "home",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    url: "/profile/",
    tabName: "profile",
    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  }
]

let urlW3 = "http://www.w3.org/2000/svg"

const Footer = ({ isActive }) => (
  <footer className="fixed bottom-0 w-full md:w-container left-0 right-0 mx-auto bg-blue-150">
    <Contact />
    <div className="w-full flex justify-between">
      {
        footers.map((footer, i) => <div key={i} className="w-4/12 py-4">
          <Link aria-label={`Go To ${footer.tabName} Page`} to={footer.url} key={i}>
            <svg className={`mx-auto ${isActive !== footer.tabName ? `opacity-25` : ``}`}
              xmlns={urlW3} width="27" height="27" fill="none" viewBox="0 0 27 27" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={footer.d} />
            </svg>
          </Link>
        </div>)
      }
    </div>
  </footer>
)

export default Footer;