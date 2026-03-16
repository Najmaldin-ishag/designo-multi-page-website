import { useEffect, useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);
  const menuTop = 96;
  const menuHeight = 235;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative container h-24 md:h-auto px-6 md:px-10 lg:px-0 md:py-[3.5rem]">
      <div className="h-full md:h-auto flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center justify-center gap-2 md:gap-4" onClick={handleCloseMenu}>
          <img src="../assets/Logo.svg" alt="logo" className="size-[1.5rem]" />
          <span className="uppercase tracking-[0.1875rem] md:tracking-[0.3125rem] text-[1rem] md:text-[1.5rem] font-bold text-dark-gray">
            Designo
          </span>
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={isOpen ? "/assets/shared/mobile/icon-close.svg" : "/assets/shared/mobile/icon-hamburger.svg"}
            alt=""
            aria-hidden="true"
            className="size-5"
          />
        </button>

        <div className="hidden md:flex gap-7 lg:gap-[7rem] uppercase text-[0.875rem] leading-normal text-gray-dark font-[400]">
          <Link to="/company">Our Company</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-x-0 bg-black/50 z-30 md:hidden"
            style={{ top: `${menuTop + menuHeight}px`, bottom: 0 }}
            onClick={handleCloseMenu}
            aria-hidden="true"
          />
          <div className="fixed inset-x-0 z-40 bg-black md:hidden" style={{ top: `${menuTop}px`, height: `${menuHeight}px` }}>
            <div className="px-6 pt-12 text-white uppercase tracking-[2px] text-[1.5rem] leading-[25px] space-y-8">
              <Link to="/company" className="block" onClick={handleCloseMenu}>
                Our Company
              </Link>
              <Link to="/locations" className="block" onClick={handleCloseMenu}>
                Locations
              </Link>
              <Link to="/contact" className="block" onClick={handleCloseMenu}>
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
