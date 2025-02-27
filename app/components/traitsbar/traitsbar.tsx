"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faComments, faDatabase, faLaptopCode} from '@fortawesome/free-solid-svg-icons';

const traits = [
    {
        title: "Solutions",
        text: "Solving problems and finding the best answer are passions of mine",
        icon: faLightbulb
    },
    {
        title: "Relatable",
        text: "I'm a good communicator who excels in team-based environments",
        icon: faComments
    },
    {
        title: "Data",
        text: "I'm experienced and love working with data of all kinds",
        icon: faDatabase
    },
    {
        title: "Adaptive",
        text: "I quickly adapt and utilize new methods of working and thinking",
        icon: faLaptopCode
    },
]
export default function TraitsBar() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4  mx-auto w-5/6 sm:w-4/5 mb-12">
    {traits.map((trait, i) =>
      <div key={i} className="block text-center mb-6 md:mb-0">
        <div className="rounded-full bg-indigo h-20 w-20 flex items-center justify-center mx-auto mb-4">
          <FontAwesomeIcon icon={trait.icon} className='text-white w-12 h-12' />
        </div>
        <h3 className="text-2xl">{trait.title}</h3>
        <p className="text-md mb-4 sm:mb-0">{trait.text}</p>
      </div>
    )}
  </div>
    )
}