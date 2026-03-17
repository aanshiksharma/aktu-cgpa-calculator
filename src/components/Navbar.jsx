import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-4 z-50 grid grid-cols-3 max-w-6xl mx-auto">
      <Link
        to="/"
        className="py-2 px-4 rounded-xl bg-background/10 backdrop-blur-md mx-auto w-fit uppercase text-muted text-sm font-semibold hover:text-secondary transition duration-300"
      >
        aktu cgpa calculator
      </Link>

      <ul className="py-2 px-4 rounded-xl bg-background/10 backdrop-blur-md mx-auto w-fit flex items-center justify-center gap-4 text-sm font-semibold">
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
    </header>
  );
}

export default Navbar;
