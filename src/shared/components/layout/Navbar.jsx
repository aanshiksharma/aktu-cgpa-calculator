import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

import Button from "../ui/Button";
import ViewModeButton from "../navigation/ViewModeButton";
import MobileNavigation from "../navigation/MobileNavigation";
import DesktopNavigation from "../navigation/DesktopNavigation";

function Navbar() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => setMobileNavVisible((prev) => !prev);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-muted/10 backdrop-blur-md">
        <div className="px-6 py-4 flex justify-between items-center max-w-5xl mx-auto">
          <Link
            to="/"
            className="flex gap-2 items-center uppercase text-secondary text-sm font-semibold"
          >
            <span className="max-w-8 aspect-square">
              <img className="w-full h-full" src="/logo.png" alt="" />
            </span>

            <span className="text-balance sm:block">aktu cgpa calculator</span>
          </Link>

          <div className="flex items-center gap-8">
            <DesktopNavigation />

            <ViewModeButton
              className="border-l pl-4 border-muted/20 hidden sm:flex"
              mobile={false}
            />
          </div>

          <Button onClick={toggleMobileNav} className="sm:hidden">
            <BsList size={24} />
          </Button>
        </div>
      </header>

      <MobileNavigation visible={mobileNavVisible} toggle={toggleMobileNav} />
    </>
  );
}

export default Navbar;
