import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LastBanner from './components/LastBanner'
import Status from './components/Status'
import Steps_3 from './components/Steps_3'
import Pricing from './components/pricing'

function App() {

  return (
    <>
     <NavBar />
     <Banner />
     <Status />
     <Steps_3 />
     <Pricing />
     <LastBanner />
     <Footer />
    </>
  );
}

export default App;
