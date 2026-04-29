import { useState } from 'react'
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from './components/Banner'
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import LastBanner from './components/LastBanner'
import MainCard from './components/MainCard'
import Status from './components/Status'
import Steps_3 from './components/Steps_3'
import Pricing from './components/pricing'
import Tab from './components/Tab'

const getData =  async ()=>{
  const res = await fetch('./data.json')
  return res.json()
}

const dataPromice = getData()

function App() {
   const [activeTab, setActiveTab] = useState('Products')
  const [carts, setCarts] = useState([])
  return (
    <>
     <NavBar carts={carts} />

     <Banner />

     <Status />

      <Tab  carts={carts} activeTab={activeTab} setActiveTab={setActiveTab}/>

      {activeTab === 'Products' && <MainCard dataPromice={dataPromice} carts={carts} setCarts={setCarts} />}

      {activeTab === 'Carts' && <Cart carts={carts} setCarts={setCarts} />}

     <Steps_3 />

     <Pricing />

     <LastBanner />

     <Footer />

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;
