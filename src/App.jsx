
import './App.css'
import AboutUs from './pages/aboutUs/AboutUs'
import Banner from './pages/banner/Banner'
import ContactUs from './pages/contacUs/ContactUs'
import Navbar from './pages/navbar/Navbar'
import OurService from './pages/ourService/OurService'
import Portfolio from './pages/portfolio/Portfolio'
import Success from './pages/success/Success'
import Team from './pages/team/Team'
function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurService></OurService>
      <AboutUs></AboutUs>
      <Portfolio></Portfolio>
      <Team></Team>
      <Success></Success>
      <ContactUs></ContactUs>
    </>
  )
}

export default App
