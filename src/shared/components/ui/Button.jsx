function Button({
  children,
  className,
  onClick,
  variant = "neutral",
  type = "button",
}) {
  const styles = {
    base: "px-3.5 py-2.5 font-semibold tracking-wide text-sm cursor-pointer rounded-md ring-1 ring-transparent  transition ease-out duration-300",
    primary:
      "bg-primary/80 text-background hover:bg-primary shadow shadow-shadow inset-shadow-shadow inset-shadow-sm",
    secondary:
      "bg-muted/20 !ring-muted/20 text-secondary hover:bg-muted/30 hover:!ring-muted/60 shadow shadow-shadow",
    neutral: "p-2!",
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
