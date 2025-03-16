import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <p className="hover:underline">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:underline">About</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className="hover:underline">Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:underline">Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
