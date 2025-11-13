import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'


const pricingPromise = fetch('PricingData.json').then(res => res.json())
function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>} >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>

    </>
  )
}

export default App
