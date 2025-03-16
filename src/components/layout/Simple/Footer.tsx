import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/privacy">
                <p className="hover:underline">Privacy Policy</p>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <p className="hover:underline">Terms of Service</p>
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
    </footer>
  );
};

export default Footer;
