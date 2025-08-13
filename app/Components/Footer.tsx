import { Link } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import Cta from "./Cta";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="relative">
      <Cta />
      <section className="bg-black py-[3.5rem]  relative -mt-[2rem] ">
        <nav className="flex items-center justify-between gap-4 container !mt-20 text-white">
          <Link
            to="/"
            className="flex items-center justify-center gap-4 cursor-pointer"
          >
            <img
              src="../assets/Logo.svg"
              alt="logo"
              className="size-[1.5rem]"
            />
            <span className="uppercase tracking-[0.3125rem] text-[1.5rem] font-bold text-white ">
              Designo
            </span>
          </Link>
          <div className="flex  gap-[7rem] uppercase text-[0.875rem] leading-[0.125rem] text-gray-dark font-[400] ">
            <Link to="company">Our Company</Link>
            <Link to="locations">Locations</Link>
            <Link to="contact">Contact</Link>
          </div>
        </nav>

        <hr className="w-[72%] h-[0.0625rem] border-dark-gray mx-auto right-0 left-0 absolute top-[50%] bottom-[50%]" />

        <div className="grid grid-cols-3 gap-5 container !mt-[8rem] ">
          <div className="text-white text-[1rem] font-[700] leading-[1.625rem] flex flex-col gap-1.5">
            <p>Designo Central Office</p>
            <address className="font-normal">
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </address>
          </div>
          <div className="text-white text-[1rem] font-[700] leading-[1.625rem] flex flex-col gap-1.5">
            <p>Contact Us (Central Office)</p>
            <address className="font-normal">
              <a href="tel: +1 253-863-8967">P : +1 253-863-8967</a> <br />
              <a href="mailto:contact@designo.co">M : contact@designo.co</a>
            </address>
          </div>
          <div className="flex items-center mt-auto gap-4">
            <FaFacebookSquare className="text-peach  " size={30} />
            <BsInstagram className="text-peach  " size={30} />
            <FaSquareXTwitter className="text-peach  " size={30} />
            <IoLogoPinterest className="text-peach  " size={30} />
            <TfiYoutube className="text-peach  " size={30} />
          </div>
        </div>
      </section>
    </footer>
  );
};
