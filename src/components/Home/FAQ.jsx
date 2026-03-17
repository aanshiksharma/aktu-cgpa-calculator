import { useState } from "react";
import { BsDash, BsPlusLg } from "react-icons/bs";

function FAQ({ question, answer }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`p-6 rounded-xl bg-surface/50 shadow shadow-black/30 flex flex-col gap-2`}
      onClick={() => setActive((prev) => !prev)}
    >
      <div className="flex gap-4 items-center">
        {active ? <BsDash /> : <BsPlusLg />}

        <p className="text-lg">{question}</p>
      </div>

      <p className={`ml-8 text-muted ${active ? "" : "hidden"}`}>{answer}</p>
    </div>
  );
}

export default FAQ;
