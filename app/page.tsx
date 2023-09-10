
import TopHero from './components/top-hero/top-hero'
import CraftingBeauty from './components/crafting-beauty'
import DiamondCut from './components/diamond-cut/diamond-cut'

export default function Home() {
  return (
    <main className="bg-white dark:bg-white">
      <TopHero />
      <CraftingBeauty />
      <DiamondCut />
    </main>
  )
}
