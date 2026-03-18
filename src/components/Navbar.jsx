import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-muted/10 backdrop-blur-md">
      <nav className="px-6 py-4 grid grid-cols-3 max-w-5xl mx-auto">
        <Link
          to="/"
          className="uppercase text-muted text-sm font-semibold hover:text-secondary transition duration-300"
        >
          aktu cgpa calculator
        </Link>

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
    </header>
  );
}

export default Navbar;
