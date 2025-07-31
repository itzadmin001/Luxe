import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
    {
        title: "Shop",
        links: [
            "Our Story",
            "Our Fabrics",
            "BYLT Retail Stores",
            "Athletes & Partners",
            "First Responders",
            "BYLT+ Rewards",
        ],
    },
    {
        title: "How It's BYLT",
        links: [
            "Frequently Asked Questions",
            "Returns & Exchanges",
            "Contact Us",
            "Careers",
            "Corporate Sales",
        ],
    },
    {
        title: "Support",
        links: [
            "Shipping Policies",
            "Returns Policy",
            "Terms & Conditions",
            "Privacy Policy",
            "Track My Order",
            "Gift Card Balance",
        ],
    },
    {
        title: "Sections",
        links: [
            "Cookie Policy",
            "Accessibility Statement",
            "Report Fakes",
            "Accessibility",
        ],
    },
];

function Footer() {
    return (
        <footer className="py-10 px-6 md:px-16 lg:px-24">
            {/* Top Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-semibold mb-3 text-base text-black">{section.title}</h3>
                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                            {section.links.map((link, i) => (
                                <Link to="#" key={i} className="hover:text-black transition duration-200">
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Subscribe Box */}
                <div>
                    <h3 className="font-semibold mb-3 text-base text-black">SAVE UP TO 20% OFF</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Sign up & save with BYLT Premium Basics
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-2 text-sm border border-gray-300 w-full sm:rounded-l-md focus:outline-none"
                        />
                        <button className="bg-gray-700 text-white px-4 py-2 text-sm mt-2 sm:mt-0 sm:rounded-r-md">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between border-t pt-6 gap-4">
                <p className="text-sm text-gray-500 text-center md:text-left">
                    Copyright © 2025 , BYLT Basics. All Rights Reserved
                </p>

                <div className="flex space-x-5 text-xl">
                    <Link
                        to="https://www.instagram.com/itz__admin__01"
                        target="_blank"
                        className="hover:text-gray-800"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        to="https://github.com/itzadmin001"
                        target="_blank"
                        className="hover:text-gray-800"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        to="https://linkedin.com/in/yogesh-kumar-558b4b26b/"
                        target="_blank"
                        className="hover:text-gray-800"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
