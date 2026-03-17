function Card({ children, className, title, body, colorVariant = "default" }) {
  const styles = {
    base: `rounded-xl shadow-md shadow-black/30 ${children ? "p-8" : "px-8 py-12"}`,
    default: "bg-surface",
    accentLight: "bg-accent",
    accentDark: "bg-accent/50",
  };

  if (children)
    return (
      <>
        <div className={`${styles.base} ${styles[colorVariant]} ${className}`}>
          {children}
        </div>
      </>
    );
  else
    return (
      <div className={`${styles.base} ${styles[colorVariant]} ${className}`}>
        <h4>{title && title}</h4>
        <p>{body && body}</p>
      </div>
    );
}

export default Card;
