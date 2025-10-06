
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/Componenets/DaisyNav/DaisyNav'
import NavBar from './assets/Componenets/DaisyNav/NavBar/NavBar'
import PricingOptions from './assets/Componenets/PricingOptions/PricingOptions'
import ResultChart from './assets/Componenets/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './assets/Componenets/MarksChart/MarksChart'

const pricingPromise = fetch("PricingData.json")
 .then(res => res.json())

const marksPromise = axios.get("MarksData.json")

function App() {
  

  return (
    <>
      
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  )
}

export default App
