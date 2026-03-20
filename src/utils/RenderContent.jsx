import Formula from "../components/About/Formula";
import List from "../components/About/List";
import Table from "../components/About/Table";

function RenderContent(content) {
  return content.map((content) => {
    switch (content.type) {
      case "lead":
        return (
          <p key={content.id} className="text-primary font-bold">
            {content.text}
          </p>
        );

      case "paragraph":
        return <p key={content.id}>{content.text}</p>;

      case "muted-paragraph":
        return (
          <p key={content.id} className="text-muted">
            {content.text}
          </p>
        );

      case "link":
        return (
          <div key={content.id}>
            <label className="text-muted font-semibold">{content.label}</label>
            <a href={content.url} className="hover:underline">
              {content.url}
            </a>
          </div>
        );

      case "formula":
        return (
          <Formula
            key={content.id}
            highlight={content.highlight}
            LHS={content.LHS}
            RHS={content.RHS}
          />
        );

      case "list":
        return <List key={content.id} content={content} />;

      case "table":
        return <Table key={content.id} content={content} />;

      default:
        return null;
    }
  });
}

export default RenderContent;
