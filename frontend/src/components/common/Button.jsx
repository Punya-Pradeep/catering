function Button({ children, loading, type = "button", onClick, variant = "primary", className = "" }) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-60";
  const styles = {
    primary: "bg-orange-400 hover:bg-orange-500 text-white",
    outline: "border border-orange-400 text-orange-400 hover:bg-orange-50",
  };

  return (
    <button type={type} onClick={onClick} disabled={loading} className={`${base} ${styles[variant]} ${className}`}>
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
