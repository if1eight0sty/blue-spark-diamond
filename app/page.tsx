import "aos/dist/aos.css";

import dynamic from "next/dynamic";

const TopHero = dynamic(() => import("./components/top-hero/top-hero"));
const CraftingBeauty = dynamic(() => import("./components/crafting-beauty"));

const DiamondCut = dynamic(
  () => import("./components/diamond-cut/diamond-cut")
);
const GlobalNetwork = dynamic(
  () => import("./components/global-network/global-network")
);
const LogoConcept = dynamic(
  () => import("./components/logo-concept/logo-concept")
);
const Team = dynamic(() => import("./components/team/team"));
import FourCs from "./components/four-cs/four-cs";

export default function Home() {
  return (
    <main className="bg-white">
      <TopHero />
      <CraftingBeauty />
      <DiamondCut />
      <FourCs />
      <GlobalNetwork />
      <Team />
      <LogoConcept />
    </main>
  );
}
