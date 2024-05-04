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
        href: '#about'
    },
    {
        name: 'Resume',
        href: '#resume'
    },
    {
        name: 'Projects',
        href: '#projects'
    },
    {
        name: 'Contact',
        href: '#contact'
    },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="sticky top-0 z-10 bg-blue-900 md:h-16">
          <div className="flex justify-between items-center p-4 sm:hidden">
            <div className="flex items-center">
              <Link href="#homepage" className="block sm:hidden">
                <h5 className="text-white text-xl font-bold block">Dale Simmons</h5>
              </Link>
            </div>
            <div className="sm:hidden">
              <button
                className="focus:outline-none"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faBars} className="text-white" />
              </button>
            </div>
          </div>
          <div className={`sm:flex flex-grow focus:outline sm:justify-end align-middle ${isOpen ? 'block' : 'hidden'} `}>
            {links.map((link) => (
              <Link key={link.name} href={`#${link.href}`} onClick={toggleMenu}>
                <h5 className="px-4 py-5 hover:text-red-500 text-white">{link.name}</h5>
              </Link>
            ))}
          </div>
        </div>
    );
}