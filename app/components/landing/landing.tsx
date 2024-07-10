import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About(){
  return (
    <div className="h-screen flex flex-col justify-center items-center font-semibold bg-columbia font-lato transition ease-in duration-300" id='#home'>
      <div className="h-1/3 text-space text-center">
        <p className="text-6xl md:text-7xl mb-4">Hey, I&apos;m Dale!</p>
        <h6 className="text-xl md:text-3xl mb-4 pt-6">I&apos;m a Seattle-based full-stack software engineer with an interest in big data.</h6>
        <div className="flex space-x-8 justify-center pt-6 pb-4">
            <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-cadet duration-300">
              <a href={`mailto:dalesimmons0210@gmail.com?subject=Hi Dale, Let's Chat!`} >
                <FontAwesomeIcon icon={faEnvelope} size='4x'/>
              </a>
            </div>
            <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-cadet duration-300">
              <a href="https://www.linkedin.com/in/dalejsimmons/">
                <FontAwesomeIcon icon={faLinkedin} size='4x'/>
              </a>
            </div>
            <div className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-cadet duration-300">
              <a href="https://github.com/Revlisc" className="">
                <FontAwesomeIcon icon={faGithub} size='4x' />
              </a>
            </div>
        </div>
        <div className="flex justify-center space-x-4 pt-12 sm:pt-8">
          <Link key='aboutlink' href="##aboutme" className="bg-indigo text-gray-100 font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"><h5>Learn More</h5></Link>
        </div>
      </div>
    </div>

  )
}
