function Button({
  children,
  className,
  onClick,
  variant = "neutral",
  type = "button",
}) {
  const styles = {
    base: "px-3 py-2 font-bold text-sm cursor-pointer rounded-md ring-1 ring-transparent transition ease-out duration-300",
    primary: "bg-primary/80 text-background hover:bg-primary",
    secondary:
      "bg-transparent text-muted/80 !ring-muted/80 hover:text-muted hover:!ring-muted",
    muted: "bg-muted/80 text-surface hover:bg-muted",
    neutral: "",
  };

  return (
    <button
      type={type}
      className={`${styles.base} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
