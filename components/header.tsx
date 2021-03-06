import Link from 'next/link'
import "../styles/main.css";
import Logo from "../public/logo.svg"

const Header: React.FC = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-2 bg-primary">
        {/* Left section */}
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
            {/* Logo */}
            <Link href="/"><img src={Logo} className="h-10 mr-2"/></Link>
            <Link href="/">
                <a className="text-xl font-semibold tracking-tight">Odin</a>
            </Link>
        </div>
        {/* Left Section End */}

        {/* Hamburger menu */}
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        {/* Hamburger Menu End */}

        {/* Navbar Links */}
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
            {/* Left hand links */}
            <div className="text-sm lg:flex-grow">
                <Link href="/about">
                    <a className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">About</a>
                </Link>
                <Link href="/about">
                    <a className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">Download</a>
                </Link>
                <Link href="//github.com/OdinMedia">
                    <a className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">Contribute</a>
                </Link>
            </div>
            {/* Right hand lnks */}
            <div>
                <Link href="/login">
                    <a className="mt-4 mr-4 text-teal-200 iblock lg:inline-block lg:mt-0 hover:text-white">Sign In</a>
                </Link>   
                <a href="https://github.com/OdinMedia" className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">Get Started</a>
            </div>
        </div>
        {/* Navbar Links End */}
    </nav>
  );
};

export default Header;
