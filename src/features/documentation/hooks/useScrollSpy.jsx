import { useEffect, useState } from "react";

function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.1,
        ...options,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [ids, options]);

  return activeId;
}

export default useScrollSpy;
