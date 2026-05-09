import { Link, NavLink } from "react-router-dom";

import links from "./data/links.content.json";

import Button from "../ui/Button";
import { BsList } from "react-icons/bs";
import ViewModeButton from "./ViewModeButton";

function MobileNavigation({ visible, toggle }) {
  return (
    <div
      className={`overlay sm:hidden position z-99 fixed inset-0 bg-background/5 backdrop-blur transition linear duration-200 ${!visible && "pointer-events-none opacity-0"}`}
    >
      <aside
        className={`px-6 py-6 flex flex-col justify-between w-4/5 max-w-xs h-full bg-background shadow shadow-shadow border-r border-primary/7 transition ease-out duration-500 ${!visible && "-translate-x-full"}`}
      >
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex gap-2 items-center uppercase text-secondary text-sm font-semibold"
            >
              <span className="max-w-8 aspect-square">
                <img className="w-full h-full" src="/logo.png" alt="" />
              </span>
            </Link>

            <Button onClick={toggle} className="sm:hidden w-fit">
              <BsList size={24} />
            </Button>
          </div>

          <nav>
            <ul className="flex flex-col text-sm font-semibold">
              {links.map((link) => (
                <li key={link.name} className="flex">
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `${isActive ? "text-primary" : "text-muted hover:text-secondary/80"} transition duration-300 ease-out w-full py-3`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <ViewModeButton className="w-full" mobile={true} />
      </aside>
    </div>
  );
}

export default MobileNavigation;
