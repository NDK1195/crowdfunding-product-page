function Button({
  py = "py-[17px]",
  fontSize = "text-sm",
  disabled = false,
  className,
  children,
}) {
  return (
    <button
      className={`${py} ${fontSize} ${className} ${disabled ? "bg-[#2f2f2f]" : "bg-moderate-cyan hover:bg-dark-cyan"} rounded-[33.5px] font-bold leading-none text-white transition-colors`}
    >
      {children}
    </button>
  );
}
export default Button;
