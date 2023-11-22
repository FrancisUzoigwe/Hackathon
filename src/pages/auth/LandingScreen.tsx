import Categories from "../screen/Categories";
import HeroPage from "../screen/HeroPage";
import ImageView from "../screen/Image";
import View from "../screen/View";

const LandingScreen = () => {
  return (
    <div className="w-full h-[120vh] ">
      <div>
        <HeroPage />
        <Categories />
        <View />
        <ImageView />
      </div>
    </div>
  );
};

export default LandingScreen;
