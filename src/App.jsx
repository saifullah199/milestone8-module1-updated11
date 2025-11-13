import { Suspense } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './PricingOptions/PricingOptions'
import ResultsChart from './Components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksData from './Components/MarksData/MarksData'


const pricingPromise = fetch('PricingData.json').then(res => res.json())

const marksPromise = axios.get('marksData.json');

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

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <MarksData marksPromise={marksPromise}></MarksData>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>

    </>
  )
}

export default App
