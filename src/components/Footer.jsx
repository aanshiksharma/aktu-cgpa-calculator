import { Link } from "react-router-dom";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "GitHub", href: "https://github.com/aanshiksharma" },
  { name: "Source Document", href: "/source-document" },
];

function Footer() {
  return (
    <footer className="py-3 px-4 border-t border-muted/25">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-10 text-sm">
        <div className="space-y-3">
          <h6>AKTU CGPA Calculator</h6>

          <p className="text-muted">
            A simple open-source tool for AKTU students to calculate CGPA using
            the official grading formula.
          </p>
        </div>

        <nav className="text-muted flex flex-wrap items-center gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-muted hover:text-secondary transition duration-300 ease-out"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="text-xs text-muted space-y-2">
          <p>
            &copy; 2026 AKTU CGPA Calculator &bull;{" "}
            <span className="text-muted/60">Created by Aanshik</span>
          </p>
          <p>Version 1.0.0</p>
          <p>
            <strong>Not</strong> affiliated with Dr. APJ Abdul Kalam University,
            Lucknow
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
