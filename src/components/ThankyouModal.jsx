import iconCheck from "../images/icon-check.svg";
import Button from "./Button";
function ThankyouModal({ onClick }) {
  return (
    <div className="fixed left-1/2 top-1/2 z-20 w-full max-w-[540px] -translate-x-1/2 -translate-y-1/2 px-6 lg:px-0">
      <div className="rounded-lg border-black/5 bg-white px-6 pb-10 pt-8 text-center lg:p-12">
        <img
          src={iconCheck}
          alt="icon check"
          className="mx-auto mb-6 lg:mb-12 lg:w-[90px]"
        />
        <h3 className="mb-6 text-lg font-bold leading-none text-black lg:mb-4 lg:text-2xl">
          Thanks for your support!
        </h3>
        <p className="mb-8 text-sm leading-6 text-dark-gray lg:text-base lg:leading-[30px]">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <Button className="w-[107px]" onClick={onClick}>
          Got it!
        </Button>
      </div>
    </div>
  );
}
export default ThankyouModal;
