import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between gap-4 container py-[3.5rem]">
      <Link to="/" className="flex items-center justify-center gap-4">
        <img src="../assets/Logo.svg" alt="logo" className="size-[1.5rem]" />
        <span className="uppercase tracking-[0.3125rem] text-[1.5rem] font-bold text-dark-gray ">
          Designo
        </span>
      </Link>
      <div className="flex  gap-[7rem] uppercase text-[0.875rem] leading-[0.125rem] text-gray-dark font-[400] ">
        <Link to="/company">Our Company</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
