import { useState } from "react";
import BookmarkBox from "./components/BookmarkBox";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import ModalOverlay from "./components/ModalOverlay";
import ProgressBox from "./components/ProgressBox";
import RewardBox from "./components/RewardBox";

function App() {
  const [isHoverBookmark, setIsHoverBookmark] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [backers, setBackers] = useState(5007);
  const [numberBacked, setNumberBacked] = useState(89914);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleNumberBacked(number) {
    setNumberBacked((prev) => prev + number);
  }

  return (
    <div className="min-h-dvh bg-[#fafafa] pb-20">
      {/* hero */}
      <Hero />
      {/* hero */}

      {/* main */}
      <section className="mx-auto -mt-14 flex max-w-[730px] flex-col gap-6 lg:-mt-[88px]">
        {isModalOpen && <ModalOverlay onClick={handleCloseModal} />}
        {isModalOpen && (
          <Modal
            onClick={handleCloseModal}
            onBacked={() => setBackers((prev) => prev + 1)}
            onSetNumberBacked={handleNumberBacked}
          />
        )}

        <BookmarkBox
          isBookmarked={isBookmarked}
          isHoverBookmark={isHoverBookmark}
          onMouseEnter={() => setIsHoverBookmark(true)}
          onMouseLeave={() => setIsHoverBookmark(false)}
          onClickBookmark={() => setIsBookmarked(!isBookmarked)}
          onClickBack={handleOpenModal}
        />

        <ProgressBox numberBacked={numberBacked} backers={backers} />

        <RewardBox onClick={handleOpenModal} />
      </section>
      {/* main */}
    </div>
  );
}
export default App;
