"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const links = [
    {
        name: 'Home',
        href: '#home'
    },
    {
        name: 'About Me',
        href: '#aboutme'
    },
    {
        name: 'Resume',
        href: '#resume'
    },
    {
        name: 'Projects',
        href: '#projects'
    }
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex flex-col sm:flex-row sticky top-0 z-10 bg-brunswick md:h-20 font-lato">
          <div className="flex flex-grow justify-between items-center h-full p-4 w-full sm:w-auto">
            <div className="flex items-center">
              <Link href="home" className="block">
                <h5 className="text-columbia text-3xl font-bold block">Dale Simmons</h5>
              </Link>
            </div>
            <div className="sm:hidden justify-end flex-row">
              <button
                className="focus:outline-none"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faBars} className="text-white" />
              </button>
            </div>
            
          </div>
          <div className={`sm:flex-row sm:flex flex-col flex-grow focus:outline-none sm:justify-end items-center ${isOpen ? 'block' : 'hidden'} `}>
            {links.map((link) => (
              <Link key={link.name} href={`#${link.href}`} onClick={toggleMenu}>
                <h5 className="px-4 py-4 hover:text-white text-columbia">{link.name}</h5>
              </Link>
            ))}
          </div>
        </div>
    );
}