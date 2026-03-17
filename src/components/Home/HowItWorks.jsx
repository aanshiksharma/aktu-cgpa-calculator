import { Link } from "react-router-dom";
import Card from "../Card";
import { BsArrowRightShort } from "react-icons/bs";

function HowItWorks() {
  const features = [
    { id: 0, body: "Based on AKTU's official CGPA formula" },
    { id: 1, body: "Works for any number of semesters" },
    { id: 2, body: "Your inputs are processed locally and never stored" },
  ];

  return (
    <section className="">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <div className="space-y-8">
          <h2 className="uppercase text-2xl">how it works?</h2>

          <p className="text-muted">
            Enter the SGPA for each semester and the calculator computes your
            CGPA instantly using AKTU’s official grading formula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-6">
          {features.map((feature) => (
            <Card
              key={feature.id}
              body={feature.body}
              colorVariant={feature.id % 2 !== 0 ? "accentLight" : "accentDark"}
            />
          ))}
        </div>

        <Link
          to="/about#cgpa-calculation"
          className="w-fit text-muted hover:text-secondary transition duration-300 flex items-center gap-1 group"
        >
          Learn how the CGPA is calculated{" "}
          <BsArrowRightShort
            size={24}
            className="group-hover:translate-x-2 transition duration-300"
          />
        </Link>
      </div>
    </section>
  );
}

export default HowItWorks;
