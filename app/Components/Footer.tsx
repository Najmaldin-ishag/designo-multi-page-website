import { Link } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import Cta from "./Cta";
// import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="relative mt-[8rem]">
      <Cta />
      <section className="bg-black pt-[10rem] pb-[4.5rem]">
        <div className="container px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 mb-10">
            <Link
              to="/"
              className="flex items-center justify-center gap-4 cursor-pointer"
            >
              <img
                src="/assets/Logo.svg"
                alt="logo"
                className="w-6 h-6"
              />
              <span className="uppercase tracking-[5px] text-2xl font-bold text-white">
                Designo
              </span>
            </Link>
            <nav className="flex flex-col md:flex-row items-center gap-8 uppercase text-sm tracking-[2px] text-white font-normal">
              <Link to="/company" className="hover:underline">Our Company</Link>
              <Link to="/locations" className="hover:underline">Locations</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>

          <hr className="border-dark-gray opacity-20 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10 md:gap-0">
            <div className="text-white/50 text-base font-normal leading-relaxed">
              <p className="font-bold text-white/50">Designo Central Office</p>
              <address className="not-italic">
                3886 Wellington Street <br />
                Toronto, Ontario M9C 3J5
              </address>
            </div>
            
            <div className="text-white/50 text-base font-normal leading-relaxed">
              <p className="font-bold text-white/50">Contact Us (Central Office)</p>
              <address className="not-italic">
                <a href="tel:+12538638967" className="hover:text-peach transition-colors">P : +1 253-863-8967</a> <br />
                <a href="mailto:contact@designo.co" className="hover:text-peach transition-colors">M : contact@designo.co</a>
              </address>
            </div>

            <div className="flex items-center gap-4 self-center md:self-end">
              <Link to="/" aria-label="Facebook">
                <FaFacebookSquare className="text-peach hover:text-white transition-colors" size={24} />
              </Link>
              <Link to="/" aria-label="Youtube">
                <TfiYoutube className="text-peach hover:text-white transition-colors" size={24} />
              </Link>
              <Link to="/" aria-label="Twitter">
                <FaSquareXTwitter className="text-peach hover:text-white transition-colors" size={24} />
              </Link>
              <Link to="/" aria-label="Pinterest">
                <IoLogoPinterest className="text-peach hover:text-white transition-colors" size={24} />
              </Link>
              <Link to="/" aria-label="Instagram">
                <BsInstagram className="text-peach hover:text-white transition-colors" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
