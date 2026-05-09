function Table({ content }) {
  return (
    <table className="text-center border border-muted">
      <thead className="border-b border-muted">
        <tr>
          {content.headers.map((header, index) => (
            <th
              key={index}
              className={`py-1.5 font-semibold text-sm ${index === 1 ? "border-x border-muted" : ""}`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {content.rows.map((row, index) => (
          <tr key={index}>
            {row.map((item, index) => (
              <td
                key={index}
                className={`py-1.5 text-sm ${index === 1 ? "border-x border-muted" : ""}`}
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
