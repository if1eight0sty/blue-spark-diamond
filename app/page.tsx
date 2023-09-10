import 'aos/dist/aos.css';

import dynamic from 'next/dynamic';

const TopHero = dynamic(() => import('./components/top-hero/top-hero'), {
  loading: () => <p>Loading...</p>,
})
const CraftingBeauty = dynamic(() => import('./components/crafting-beauty'), {
  loading: () => <p>Loading...</p>,
})

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
