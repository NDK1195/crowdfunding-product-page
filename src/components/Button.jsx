function Button({
  px = "px-8",
  py = "py-4",
  fontSize = "text-sm",
  disabled = false,
  children,
}) {
  return (
    <button
      className={`${px} ${py} ${fontSize} ${disabled ? "bg-[#2f2f2f] bg-opacity-5" : "bg-moderate-cyan hover:bg-dark-cyan"} rounded-[33.5px] font-bold leading-none text-white transition-colors`}
    >
      {children}
    </button>
  );
}
export default Button;
