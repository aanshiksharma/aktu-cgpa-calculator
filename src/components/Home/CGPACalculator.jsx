import useCGPACalculator from "../../hooks/useCGPACalculator";
import Button from "../Button";

function CGPACalculator() {
  const {
    results,
    semesters,
    handleAddSemester,
    handleSGPAChange,
    handleCreditsChange,
    handleReset,
    calculate,
  } = useCGPACalculator();

  return (
    <form
      className="flex flex-col gap-6 md:gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        calculate();
      }}
    >
      <div className="bg-surface rounded-xl shadow-lg shadow-black/30 p-6 flex flex-col gap-8 md:p-8 md:gap-6 w-full">
        <div className="space-y-4">
          {semesters.map((_, index) => (
            <div
              key={index}
              className="flex max-[900px]:flex-col min-[900px]:items-center min-[900px]:justify-between gap-4 md:gap-6"
            >
              <h6 className="font-semibold">Semester {index + 1}</h6>

              <fieldset className="flex max-[460px]:flex-col justify-center min-[900px]:justify-end items-center gap-4 flex-1 w-full">
                <input
                  type="text"
                  placeholder="SGPA"
                  className="flex-1"
                  onChange={(e) => handleSGPAChange(e, index)}
                />
                <input
                  type="text"
                  placeholder="Credits"
                  className="flex-1"
                  onChange={(e) => handleCreditsChange(e, index)}
                />
              </fieldset>
            </div>
          ))}
        </div>

        <Button
          variant="secondary"
          onClick={handleAddSemester}
          className="max-md:w-full max-md:max-w-80 max-md:mx-auto self-start"
        >
          + Add Semester
        </Button>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-8 w-full">
        {[
          {
            heading: "CGPA",
            body: results.CGPA === 0 ? "--.--" : results.CGPA,
          },
          {
            heading: "Equivalent Percentage",
            body: results.percentage === 0 ? "--.--" : `${results.percentage}%`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex-1 p-6 grid content-between gap-6 bg-surface rounded-xl shadow-lg shadow-black/30"
          >
            <h5 className="text-muted">{item.heading}</h5>

            <p className="text-4xl md:text-5xl whitespace-nowrap">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:self-end">
        <Button
          type="reset"
          variant="secondary"
          onClick={handleReset}
          className="w-full"
        >
          Reset
        </Button>
        <Button type="submit" variant="primary" className="w-full">
          Calculate
        </Button>
      </div>
    </form>
  );
}

export default CGPACalculator;
