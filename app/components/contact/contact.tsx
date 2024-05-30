import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <div id="#contact" className="bg-gray-100 py-16 mt-6 font-roboto">
        <div className="mx-auto w-5/6 sm:w-3/5">
          <h1 className="text-4xl mx-auto text-center mb-8 font-semibold font-lato">Ways to Get In Touch</h1>
          <p className="text-lg text-center mb-8 mx-auto text-center">Reach out at any of the following so we can chat</p>
          <div className="justify-center mx-auto text-center grid grid-cols-1 sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLocationDot} className="h-12 w-12 mb-2" />
              <h3 className="text-lg font-semibold">Where I am</h3>
              <h5>Seattle, WA</h5>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faEnvelope} className="h-12 w-12 mb-2" />
              <h3 className="text-lg font-semibold">Email me at</h3>
              <h5><a href="mailto:dalesimmons0210@gmail.com">dalesimmons0210@gmail.com</a></h5>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLinkedin} className="h-12 w-12 mb-2" />
              <h3 className="text-lg font-semibold">Let&apos;s Connect</h3>
              <h5><a href="https://www.linkedin.com/in/dalejsimmons/">LinkedIn</a></h5>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faGithub} className="h-12 w-12 mb-2" />
              <h3 className="text-lg font-semibold">See more of my works</h3>
              <h5><a href="https://github.com/Revlisc">GitHub</a></h5>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  