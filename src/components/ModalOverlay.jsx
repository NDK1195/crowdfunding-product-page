function ModalOverlay({ onClick }) {
  return (
    <div
      className="fixed left-0 top-0 min-h-dvh w-full bg-black opacity-[0.4988]"
      onClick={onClick}
    ></div>
  );
}
export default ModalOverlay;
