"use client"
import Skills from "../skills/skills"
import TraitsBar from "../traitsbar/traitsbar"
import { useState } from "react";

// export default function AboutMe() {

//     return (
//         <div className="bg-gray-100 pt-12" id='#about'>
//             <h2 className="text-5xl mx-auto text-center mb-8 font-semibold">Let Me Introduce Myself</h2>
//             <p className="text-md text-left w-full sm:w-3/5 mx-auto mb-2 mt-24">
//             I'm a people-focused and results-driven engineer with over two years of experience in building scalable and maintainable software solutions in Agile teams. I love to tackle challenging problems together - the collaborative aspect of programming and problem-solving is among my favorites on the job. I’m always up to get a ping or a call to dive into a new problem and figure it out together. I strive to bring a positive attitude and treat all experiences as one I can learn and grow from. As part of my commitment to growth, on the side I am also pursuing my Masters in Computer Science where I have been focusing on Big Data and Machine learning.
//             </p>
//             <p className="text-md text-left w-full sm:w-3/5 mx-auto mb-2 mt-2">
//             During my time at GenesisCare, I spearheaded in the development of new full-stack software solutions on our patient treatment planning and billing system using JavaScript, .NET, C#, SQL, Bootstrap, and React. I've led in the integration of Test-Driven Development to reduce development time and increase code quality leading to reduced time to production by 25%. I've optimized update and data retrieval queries and scripts in the database to reduce processing time by up to 50%. Finally, I've modernized and refactored the existing code base to improve user experience and increase maintainability leading to a reduction of incoming user tickets by 40%.
//             At REV Tech, I gained experience working with a diverse clientele while balancing multiple concurrent projects in multiple frameworks in Agile development cycles. Throughout the projects, I made strong use of .NET, ASP.NET, React, and C# to deliver high quality results for clients on a tight schedule.
//             </p>
//             <p className="text-md text-left w-full sm:w-3/5 mx-auto mb-24 mt-2">I'm passionate about leveraging data to solve complex problems and improve decision making processes. I thrive in collaborative environments where I can contribute my expertise and make a meaningful impact. My approach to software development is rooted in continuous learning, adaptability, and collaboration. Let's connect to discuss how my skills and experience can align with your team's needs!</p>
//             <TraitsBar/>
//             <Skills/>
//         </div>
//     )
// }

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
  }
  
  const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="border-b border-gray-200">
        <button
          className="flex justify-between items-center w-full p-4 focus:outline-none"
          onClick={toggleAccordion}
        >
          <span className="text-lg font-semibold">{title}</span>
          <svg
            className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4">
            {content}
          </div>
        )}
      </div>
    );
  };
  
  interface AccordionProps {
    items: AccordionItemProps[];
  }
  
  const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
      <div className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    );
  };
  
  const AboutMe: React.FC = () => {
    const accordionItems: AccordionItemProps[] = [
      {
        title: 'Work Background',
        content: (
          <div className="text-base text-gray-700">
            <p>
              I am currently a Software Engineer at Actalent, working with C# and Python on backend systems to increase the capabilities, user experience, and efficiency of laboratory analysis software.
            </p>
            <br/>
            <p>
            During my time at GenesisCare, I spearheaded the development of new full-stack software solutions on our patient treatment planning and billing system using JavaScript, .NET, C#, SQL, Bootstrap, and React. I led the integration of Test-Driven Development to reduce development time and increase code quality leading to reduced time to production by 25%. I optimized update and data retrieval queries and scripts in the database to reduce processing time by up to 50%. Finally, I modernized and refactored the existing code base to improve user experience and increase maintainability leading to a reduction of incoming user tickets by 40%.
            </p>
            <br/>
          <p>
            At REV Tech, I gained experience working with a diverse clientele while balancing multiple concurrent projects in multiple frameworks in Agile development cycles. Throughout the projects, I made strong use of .NET, ASP.NET, React, and C# to deliver high-quality results for clients on a tight schedule.
          </p>
          </div>
        ),
      },
      {
        title: 'Interests',
        content: (
          <p className="text-base text-gray-700">
            I am passionate about leveraging data to solve complex problems and improve decision-making processes. I thrive in collaborative environments where I can contribute my expertise and make a meaningful impact. My approach to software development is rooted in continuous learning, adaptability, and collaboration. Lets connect to discuss how my skills and experience can align with your team&apos;s needs!
          </p>
        ),
      },
    ];
  
    return (
      <div id='#aboutme' className="bg-gray-100 mx-auto py-12 text-space shadow-md">
        <div className=" py-12 font-roboto">
          <h2 className="sm:text-4xl md:w-full w-4/5 text-2xl mx-auto text-center mb-8 font-semibold font-lato text-space">Let Me Introduce Myself</h2>
          <p className=" w-4/6 sm:w-3/5 mx-auto mb-8 mt-8">
            I am a people-focused and results-driven engineer with three years of experience in building scalable and maintainable software solutions in Agile teams. I love to tackle challenging problems together - the collaborative aspect of programming and problem-solving is among my favorites on the job. I am always up to get a ping or a call to dive into a new problem and figure it out together. I strive to bring a positive attitude and treat all experiences as ones I can learn and grow from. As part of my commitment to growth, I completed my Master degree in Computer Science in 2024 with a 3.93 GPA while working full time. In keeping with my interest in data and utilizing it to help others, I volunteer for educational and conservation-based organizations to help them process, understand, and utilize their data.
          </p>
          <div className="sm:w-3/5 w-4/5 mx-auto mb-2 pb-12">
            <Accordion items={accordionItems}/>
          </div>
          <TraitsBar />
          <Skills />
        </div>
      </div>
    );
  };
  
  export default AboutMe;
  
