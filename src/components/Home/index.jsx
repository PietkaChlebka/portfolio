import AboutUs from "./AboutUS";
import Foot from "./Foot";
import HomeHeader from "./HomeHeader";
import SimpleSteps from "./SimpleSteps";
import ThreeColumns from "./ThreeColumns";
import WhomWeHelp from "./WhomWeHelp";

function Home() {
  return (
    <div>
      <HomeHeader />
      <ThreeColumns />
      <SimpleSteps />
      <AboutUs />
    </div>
  );
}

export default Home;
