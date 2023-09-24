import 'aos/dist/aos.css';

import dynamic from 'next/dynamic';

const TopHero = dynamic(() => import('./components/top-hero/top-hero'))
const CraftingBeauty = dynamic(() => import('./components/crafting-beauty'))

import FourCs from './components/four-cs/four-cs'

export default function Home() {
  return (
    <main className="bg-white">
      <TopHero />
      <CraftingBeauty />
      <FourCs />
    </main>
  )
}
