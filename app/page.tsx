
import TopHero from './components/top-hero/top-hero'
import CraftingBeauty from './components/crafting-beauty'
import DiamondCut from './components/diamond-cut/diamond-cut'
import FourCs from './components/four-cs/four-cs'

export default function Home() {
  return (
    <main className="bg-white dark:bg-white">
      <TopHero />
      <CraftingBeauty />
      <DiamondCut />
      <FourCs />
    </main>
  )
}
