import links from "../../data/sidebarLinks.content.json";

function Sidebar({ activeId, className = "" }) {
  return (
    <aside className={`sticky top-8 self-start ${className}`}>
      <h4 className="text-xs uppercase font-semibold text-muted">
        on this page
      </h4>

      <nav className="mt-8">
        <ul>
          {links.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <li
                key={link.href}
                className={`pl-4 py-1 border-l-2 ${isActive ? "border-l border-primary text-primary font-semibold" : "border-muted/25 text-muted hover:text-secondary"}`}
              >
                <a
                  href={link.href}
                  className="text-sm whitespace-nowrap transition duration-300 ease-out"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
