import { Link, NavLink } from "react-router-dom";

import links from "./data/links.content.json";
import ViewModeButton from "./ViewModeButton";

function DesktopNavigation() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center justify-center gap-4 text-sm font-semibold">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `${isActive ? "text-primary" : "text-muted hover:text-secondary/80"} transition duration-300 ease-out`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNavigation;
