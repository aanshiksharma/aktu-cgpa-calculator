import { Link } from "react-router-dom";
import Card from "../Card";
import { BsArrowRightShort } from "react-icons/bs";

function HowItWorks() {
  const features = [
    { id: 0, body: "Uses AKTU's official CGPA formula" },
    { id: 1, body: "Works for any number of semesters" },
    { id: 2, body: "All calculations happen locally in your browser" },
  ];

  return (
    <section className="">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <article className="space-y-4">
          <h2 className="uppercase text-2xl mb-12">how it works?</h2>

          <p className="text-muted">
            Enter the SGPA for each semester and the calculator computes your
            CGPA instantly using AKTU’s official grading formula.
          </p>

          <p className="text-muted">
            AKTU calculates CGPA using a weighted average of the SGPA from each
            semester, where each semester’s contribution depends on its total
            credit hours.
          </p>
        </article>

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
          Learn more about calculating CGPA{" "}
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
