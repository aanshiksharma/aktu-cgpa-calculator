function Formula({ highlight, LHS, RHS }) {
  return (
    <div
      className={`formula flex items-center gap-3 text-center ${highlight ? "w-fit border border-primary p-6 text-2xl" : ""}`}
    >
      <span>{LHS}</span>
      <span>=</span>
      {renderRhs(RHS)}
    </div>
  );
}

function renderRhs(RHS) {
  switch (RHS.type) {
    case "fraction":
      return (
        <div className="flex flex-col items-center gap-2">
          <div>{RHS.numerator}</div>
          <hr className="w-full" />
          <div>{RHS.denominator}</div>
        </div>
      );

    case "expression":
      return <span className="whitespace-nowrap">{RHS.value}</span>;

    default:
      return null;
  }
}

export default Formula;
