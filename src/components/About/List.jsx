function List({ content }) {
  return (
    <div>
      {content.heading !== "" && (
        <p className="text-muted mb-2">{content.heading}</p>
      )}

      <ul className="space-y-2 list-disc list-inside">
        {content.items.map((item) => {
          switch (item.type) {
            case "text":
              return <li key={item.id}>{item.value}</li>;

            case "link":
              return (
                <li key={item.id}>
                  <label className="text-muted font-semibold">
                    {item.label}
                  </label>
                  <a href={item.url} className="hover:underline">
                    {item.url}
                  </a>
                </li>
              );

            default:
              return <li key={item.id}>{item.value}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export default List;
