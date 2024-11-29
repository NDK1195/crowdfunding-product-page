function Box({ children }) {
  return (
    <div className="mx-6 max-w-[730px] rounded-lg border border-[#0000000d] bg-white px-6 pb-10 sm:mx-auto lg:px-12 lg:pb-12">
      {children}
    </div>
  );
}
export default Box;
