import React from 'react'

function Contact() {
  return (
    <div className="">
      <h2 className="">Got something to discuss? </h2>
      <p className="">Feel free to get in touch</p>
      <a className="" href="mailto:hello@sureshkumar.dev" title="Contact">
        <button className="" type="button">
          <svg
            aria-hidden="true"
            className=""
            focusable="false"
            role="presentation"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path d="M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"></path>
              <path d="M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"></path>
            </g>
          </svg>
          Contact me
        </button>
      </a>
    </div>
  )
}

export default Contact
