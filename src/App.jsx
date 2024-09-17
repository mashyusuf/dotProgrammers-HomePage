
import './App.css'
import AboutUs from './pages/aboutUs/AboutUs'
import Banner from './pages/banner/Banner'
import Navbar from './pages/navbar/Navbar'
import OurService from './pages/ourService/OurService'
import Portfolio from './pages/portfolio/Portfolio'
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
    </>
  )
}

export default App
