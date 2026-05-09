import useScrollSpy from "../hooks/useScrollSpy";

import RenderContent from "../components/RenderContent";
import Sidebar from "../components/Sidebar";

import aboutPageData from "../data/documentation.content.json";

function About() {
  const ids = aboutPageData.map((block) => block.id);
  const activeId = useScrollSpy(ids);

  return (
    <main className="max-w-5xl mx-auto">
      <div className="flex">
        <div className="space-y-24 px-6 py-16">
          {aboutPageData.map((block, index) => (
            <section
              key={block.id}
              id={block.id}
              className="space-y-12 scroll-mt-25"
            >
              {index === 0 ? (
                <h1 className="uppercase text-4xl">{block.heading}</h1>
              ) : (
                <h2 className="uppercase text-2xl">{block.heading}</h2>
              )}

              <div className="grid gap-8">{RenderContent(block.content)}</div>
            </section>
          ))}
        </div>

        <Sidebar activeId={activeId} className="px-6 py-16 max-md:hidden" />
      </div>
    </main>
  );
}

export default About;
