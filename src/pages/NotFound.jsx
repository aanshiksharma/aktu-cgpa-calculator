import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="h-screen max-w-7xl mx-auto px-6 flex flex-col justify-center gap-4">
      <h1 className="text-6xl font-semibold">404 - Page not found!</h1>

      <div className="text-muted space-y-1">
        <p>Looks like the page you are looking for failed its semester</p>
        <p>
          Head back to the{" "}
          <Link
            to={"/"}
            className="hover:underline hover:text-secondary transition duration-300 ease-out"
          >
            CGPA Calculator
          </Link>
        </p>
      </div>
    </section>
  );
}

export default NotFound;
