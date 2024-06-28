import React from 'react';

const NavBar: React.FC = () => (
    <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
                        <li className="text-white">
                        <a className="hover:text-gray-300">
                        Home
                    </a>
                    </li>
<li className="text-white">
                        <a className="hover:text-gray-300">
                        About
                    </a>
                    </li>
<li className="text-white">
                        <a className="hover:text-gray-300">
                        Contact
                    </a>
                    </li>
                    </ul>
    </nav>
);

export default NavBar;