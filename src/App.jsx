import Navbar from './components/NavBar.jsx'
import Header from './components/header.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import ImpactOnClients from './components/ImpactOnClients.jsx'
import OurTechnologyPartners from './components/OurTechnologyPartners.jsx'
import Testimonials from './components/Testimonials.jsx'
import LatestBlogAndFooter from './components/LatestBlogAndFooter.jsx'


function App () {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ServicesSection />
      <ImpactOnClients />
      <Testimonials />
      <OurTechnologyPartners />
      <LatestBlogAndFooter />
    </div>
  )
}

export default App