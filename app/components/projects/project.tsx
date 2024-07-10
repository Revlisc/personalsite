"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react"
export default function Project({id, img, description, technologies}: {id: string, img: string | StaticImageData, description: string, technologies: string}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
          {/* Button to open the modal */}
          <button onClick={openModal} className="bg-indigo hover:bg-cadet text-white font-bold py-2 px-4 rounded">
            <div className="mx-auto">
              <Image src={typeof img === 'string' ? img : img.src} alt="Project Image" className="h-64" height={100} width={300}/>
            </div>
            {id}
          </button>
          
          {isModalOpen && (
            <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
              <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
              <div className="relative bg-white rounded-lg overflow-hidden max-w-md">
                <div className="px-6 py-8 text-space">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Project Details</h3>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <Image src={typeof img === 'string' ? img : img.src} alt="Project Image" className="w-full h-64 object-cover mb-6" height={300} width={400}/>
                  <p className="text-sm mb-4">{description}</p>
                  <p className="text-sm font-semibold">Technologies used: {technologies}</p>
                </div>
                <div className="bg-columbia px-6 py-4 flex justify-end">
                  <button onClick={closeModal} className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none">Close</button>
                </div>
              </div>
            </div>
          )}

        </div>
      )
}