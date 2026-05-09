import { useState } from "react";

function useCGPACalculator() {
  const [results, setResults] = useState({ CGPA: 0, percentage: 0 });
  const [semesters, setSemesters] = useState([
    { SGPA: 0, credits: 0 },
    { SGPA: 0, credits: 0 },
  ]);

  const handleAddSemester = () => {
    setSemesters((prev) => {
      const newSemesters = [...prev];
      newSemesters.push({ SGPA: 0, credits: 0 });
      return newSemesters;
    });
  };

  const handleReset = () => {
    setSemesters([
      { SGPA: 0, credits: 0 },
      { SGPA: 0, credits: 0 },
    ]);
    setResults({ CGPA: 0, percentage: 0 });
  };

  const handleSGPAChange = (e, index) => {
    const value = Number(e.target.value);

    if (isNaN(value)) {
      alert("Please enter a valid number");
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    if (value < 0 || value > 10) {
      alert("SGPA must be between 0 and 10");
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    setSemesters((prev) => {
      const newSemesters = [...prev];
      newSemesters[index].SGPA = value;
      return newSemesters;
    });
  };

  const handleCreditsChange = (e, index) => {
    const value = Number(e.target.value);

    if (isNaN(value)) {
      alert("Please enter a valid number");
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    if (value < 0) {
      alert("Credits must be greater than or equal to 0");
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    setSemesters((prev) => {
      const newSemesters = [...prev];
      newSemesters[index].credits = value;
      return newSemesters;
    });
  };

  const calculate = () => {
    const totalCredits = semesters.reduce((acc, curr) => acc + curr.credits, 0);

    if (totalCredits === 0) {
      alert("Please enter at least one SGPA");
      setResults({ CGPA: 0, percentage: 0 });
      return;
    }

    const sop = semesters.reduce(
      (acc, curr) => acc + curr.SGPA * curr.credits,
      0,
    );

    const cgpa = (sop / totalCredits).toFixed(2);
    const percentage = (cgpa * 10).toFixed(2);
    setResults({ CGPA: cgpa, percentage: percentage });
  };

  return {
    results,
    semesters,
    handleAddSemester,
    handleReset,
    handleSGPAChange,
    handleCreditsChange,
    calculate,
  };
}

export default useCGPACalculator;
