import React, { lazy, useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart, FaBars, FaTimes, FaRegUserCircle } from 'react-icons/fa';
const Container = lazy(() => import("./Container"))
import { Link } from 'react-router-dom';



const menuItems = [
    { name: 'Men', path: '/mens' },
    { name: 'Women', path: '/women' },
    { name: 'Kids', path: '/kids' },
    { name: 'Bundles', path: '/bundles' },
    { name: 'Last Call', path: '/last-call' },
];

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navColor, SetNavColor] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                SetNavColor(true);
            } else SetNavColor(false)
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <header className={`w-full fixed top-0 duration-300 z-20 ${navColor ? "bg-white shadow-md text-black " : "bg-transparent text-white"}`} >
            <div className=' p-2 bg-[#252533] text-white text-center uppercase hover:underline cursor-pointer'>
                <h1>Free Shopping on orders $56 </h1>
            </div>
            <Container clasess=" mx-auto flex justify-between items-center py-6">


                <h1 className="text-4xl font-bold cursor-pointer">Luxe</h1>

                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <FaBars />
                    </button>

                    <div className="hidden md:flex gap-6 text-md  font-medium uppercase">
                        {menuItems.map((item, idx) => (
                            <div
                                key={idx}
                                className=" group cursor-pointer hover:text-gray-600 duration-300"
                            >
                                <Link to={item.path}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="flex items-center gap-4 text-2xl">
                    <FaHeart className="cursor-pointer hover:text-red-500 duration-300" />
                    <FaRegUserCircle className="cursor-pointer" />
                    <FaShoppingCart className="cursor-pointer hover:text-blue-500 duration-300" />
                </div>
            </Container>

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