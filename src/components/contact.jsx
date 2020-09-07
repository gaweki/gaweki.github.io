import React, { useState } from "react";

const Contact = () => {

  const [show, setShow] = useState(false);

  return (
    <>
    <div role="button" tabIndex="0" aria-label="Toggle Background Contacts" onKeyDown={() => setShow(false)}  onClick={() => setShow(false)} className={`w-full h-screen fixed top-0 left-0 z-20 ${show ? `block` : `hidden`}`}></div>
    <div className="absolute right-20 bottom-40">
      <div role="button" tabIndex="0" aria-label="Toggle Contacts" onKeyDown={(e) => e.keyCode === 67 ? setShow(prevState => !prevState) : ''} onClick={() => setShow(prevState => !prevState)} className={`z-10 fixed border-black p-2 border border rounded-full ${show ? `hidden` : `block`}`}>
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
    <div className="fixed z-30 right-20 bottom-40">
      <a className={`pb-3 ${show? `block` : `hidden`}`} href="https://twitter.com/messages/compose?recipient_id=963052414264688640&text=Hello%20Andrel">
          <svg width="40" height="40" fill="rgba(29,161,242,1.00)" viewBox="0 0 25 25">
              <g>
                  <path
                      d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                  ></path>
              </g>
          </svg>
      </a>
      <a className={`pb-3 ${show? `block` : `hidden`}`} href="https://m.facebook.com/messages/compose?ids=100011595496988">
          <svg viewBox="0 0 36 36" fill="url(#jsc_s_2)" height="40" width="40">
              <defs>
                  <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2">
                      <stop offset="0%" stop-color="#0062E0"></stop>
                      <stop offset="100%" stop-color="#19AFFF"></stop>
                  </linearGradient>
              </defs>
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
              <path fill="white" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
          </svg>
      </a>
      <a className={`${show? `block` : `hidden`}`} href="https://mail.google.com/mail/?view=cm&fs=1&to=andrel.sitanggang@gmail.com&su=Hello%20Andrel">
        <img class="w-10" src="https://img.icons8.com/color/2x/gmail.png" alt="Email andrel" />
      </a>
    </div>
    </>
  )
}

export default Contact;