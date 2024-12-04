import { useState } from "react";
import RewardInModal from "./RewardInModal";
import ThankyouModal from "./ThankyouModal";

const data = [
  {
    title: "Pledge with no reward",
    price: null,
    content:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    numberLeft: null,
    pledgeWithReward: false,
    outOfStock: false,
  },
  {
    title: "Bamboo Stand",
    price: 25,
    content:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    numberLeft: 101,
    pledgeWithReward: true,
    outOfStock: false,
  },
  {
    title: "Black Edition Stand",
    price: 75,
    content:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    numberLeft: 64,
    pledgeWithReward: true,
    outOfStock: false,
  },
  {
    title: "Mahogany Special Edition",
    price: 200,
    content:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    numberLeft: 0,
    pledgeWithReward: true,
    outOfStock: true,
  },
];
function Modal({ onClick, onBacked, onSetNumberBacked }) {
  const [onHoverCloseModal, setOnHoverCloseModal] = useState(false);
  const [isChosenReward, setIsChosenReward] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  function handleChosenReward(title) {
    setIsChosenReward(title);
  }
  return (
    <>
      {isCompleted ? (
        <ThankyouModal onClick={onClick} />
      ) : (
        <div className="fixed left-1/2 top-1/2 z-20 w-full max-w-[730px] -translate-x-1/2 -translate-y-1/2 px-6 lg:px-0">
          <div className="rounded-lg border border-black/5 bg-white px-6 py-8 lg:p-12">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold leading-none text-black lg:text-2xl">
                Back this project
              </h2>
              <svg
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onMouseEnter={() => setOnHoverCloseModal(true)}
                onMouseLeave={() => setOnHoverCloseModal(false)}
                onClick={onClick}
              >
                <path
                  d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                  fill="#000"
                  fillRule="evenodd"
                  opacity={`${onHoverCloseModal ? "1" : "0.4"}`}
                />
              </svg>
            </div>

            <p className="mb-4 text-sm leading-6 text-dark-gray lg:mb-8 lg:text-base lg:leading-[30px]">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>

            <div className="flex flex-col gap-6">
              {data.map((data) => (
                <RewardInModal
                  key={data.title}
                  title={data.title}
                  price={data.price}
                  content={data.content}
                  numberLeft={data.numberLeft}
                  outOfStock={data.outOfStock}
                  pledgeWithReward={data.pledgeWithReward}
                  onClick={handleChosenReward}
                  isChosenReward={isChosenReward === data.title}
                  onCompleted={() => setIsCompleted(true)}
                  onBacked={onBacked}
                  onSetNumberBacked={onSetNumberBacked}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;
