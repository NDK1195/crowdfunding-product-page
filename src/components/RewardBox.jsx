import Box from "./Box";
import Reward from "./Reward";

function RewardBox({ onClick }) {
  return (
    <Box>
      <div className="mb-9 mt-10 lg:mb-10 lg:mt-12">
        <h2 className="mb-6 text-lg font-bold leading-none text-black lg:mb-9 lg:text-xl">
          About this project
        </h2>
        <div className="text-sm leading-6 text-dark-gray lg:text-base lg:leading-[30px]">
          <p className="mb-9 lg:mb-10">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Reward
          title="Bamboo Stand"
          price={25}
          content="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          numberLeft={101}
          onClick={onClick}
        />
        <Reward
          title="Black Edition Stand"
          price={75}
          content="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          numberLeft={64}
          onClick={onClick}
        />
        <Reward
          title="Mahogany Special Edition"
          price={200}
          content="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          numberLeft={0}
          outOfStock={true}
        />
      </div>
    </Box>
  );
}
export default RewardBox;
