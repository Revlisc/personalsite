import Link from "next/link";
export default function About(){
  return (
    <div className="h-screen flex flex-col justify-center items-center font-semibold bg-gradient-to-b from-blue-500 to-purple-700 font-lato" id='#home'>
      <div className="h-1/3 text-white text-center">
        <p className="text-6xl md:text-7xl mb-4">Hey, I&apos;m Dale!</p>
        <h6 className="text-xl md:text-2xl mb-4">I&apos;m a full-stack software engineer with an interest in big data.</h6>
        <h6 className="text-lg md:text-xl mb-8">My multifaceted background has given me a diverse viewpoint of data, and my love of collaborative problem-solving has led to where I am today.</h6>
        <div className="flex justify-center space-x-4">
          <Link key='aboutlink' href="##aboutme" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300"><h5>Learn More</h5></Link>
          <Link key='contactlink' href="##contact" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300"><h5>Get in Touch</h5></Link>
        </div>
      </div>
    </div>

  )
}
