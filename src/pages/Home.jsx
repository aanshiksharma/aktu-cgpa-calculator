import CGPACalculator from "../components/Home/CGPACalculator";
import HowItWorks from "../components/Home/HowItWorks";

import faqs from "../assets/faqs.json";
import FAQ from "../components/Home/FAQ";

function Home() {
  return (
    <>
      <section className="space-y-16 max-w-5xl mx-auto px-4 md:px-6 py-16">
        <article id="intro" className="">
          <h1 className="text-4xl mb-8">AKTU CGPA Calculator</h1>

          <p>
            Enter the SGPA for each semester to instantly calculate your CGPA
            and equivalent percentage.
          </p>
          <p className="text-muted">
            Based on the official AKTU calculation method
          </p>
        </article>

        <CGPACalculator />
      </section>

      <HowItWorks />

      <section id="faqs" className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <h2 className="text-2xl">FREQUENTLY ASKED QUESTIONS (FAQs)</h2>

        <ul className="grid gap-2">
          {faqs.map((ques) => (
            <li key={ques.id}>
              <FAQ question={ques.question} answer={ques.answer} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
