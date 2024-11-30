function Box({ children }) {
  return (
    <div className="relative mx-6 rounded-lg border border-[#0000000d] bg-white px-6 pb-10 lg:mx-0 lg:px-12 lg:pb-12">
      {children}
    </div>
  );
}
export default Box;
