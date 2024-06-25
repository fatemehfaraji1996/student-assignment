// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
// import Mycomponent from './components/Flag'
import CountryPage from './components/pageTwo'
function App() {
  
  return (
    <>
          <div className="navbar">
        <p className="p-navbar">where in the world? </p>
        <button className="button">Dark mode</button>
      </div>
    {/* <Mycomponent/> */}
    <CountryPage/>
    </>
  )
}

export default App
