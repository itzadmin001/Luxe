import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaBars, FaTimes, FaRegUserCircle } from 'react-icons/fa';
import Logo from "../../public/LuxeLogo.svg"
import Logo2 from "../../public/LuxeLogo2.svg"
import { Link } from 'react-router-dom';



const menuItems = [
    { name: 'Men', path: '/mens', categories: ['T-Shirts', 'Jeans', 'Shoes'] },
    { name: 'Women', path: '/women', categories: ['Dresses', 'Tops', 'Heels'] },
    { name: 'Kids', path: '/kids', categories: ['Shirts', 'Shorts', 'Sneakers'] },
    { name: 'Bundles', path: '/bundles', categories: ['Summer Pack', 'Winter Pack'] },
    { name: 'Last Call', path: '/last-call', categories: ['Clearance', 'Final Sale'] },
];

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeHover, setActiveHover] = useState(null);

    return (
        <header className="w-full shadow-md sticky top-0 bg-[#FEFCF5] z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

                {/* Left: Menu icon on mobile or full menu on desktop */}
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <FaBars />
                    </button>

                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        {menuItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setActiveHover(idx)}
                                onMouseLeave={() => setActiveHover(null)}
                            >
                                <Link href={item.path}>{item.name}</Link>
                                {activeHover === idx && (
                                    <div className="absolute top-full left-0 bg-white shadow-md p-4 rounded mt-2 z-40">
                                        <ul className="space-y-2">
                                            {item.categories.map((cat, i) => (
                                                <li key={i} className="hover:underline text-sm">{cat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center: Logo */}
                <div className="text-xl font-bold">

                    <img src={Logo} alt="Logo" className="w-22 mx-auto" />

                </div>

                {/* Right: Icons */}
                <div className="flex items-center gap-4 text-xl">
                    <FaHeart className="cursor-pointer hover:text-red-500" />
                    <FaRegUserCircle className="cursor-pointer" />
                    <FaShoppingCart className="cursor-pointer hover:text-blue-500" />
                </div>
            </div>

            {/* Mobile Side Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="fixed left-0 top-0 h-full w-64 bg-white p-6 shadow-lg z-50">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold">Menu</h2>
                            <FaTimes
                                className="text-xl cursor-pointer"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                        </div>
                        <ul className="space-y-4">
                            {menuItems.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.path} className="text-sm font-medium block hover:underline">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;