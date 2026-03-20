import useScrollSpy from "../hooks/useScrollSpy";

import Sidebar from "../components/About/Sidebar";

import aboutPageData from "../data/aboutPage.content.json";
import RenderContent from "../utils/RenderContent";

function About() {
  const ids = aboutPageData.map((block) => block.id);
  const activeId = useScrollSpy(ids);

  return (
    <main className="max-w-5xl mx-auto">
      <div className="flex">
        <div className="space-y-24 px-6 py-16">
          {aboutPageData.map((block) => (
            <section
              key={block.id}
              id={block.id}
              className="space-y-12 scroll-mt-25"
            >
              <h2 className="uppercase font-semibold text-primary text-2xl">
                {block.heading}
              </h2>

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
