import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhyUs from './components/WhyUs'
import DashboardFeature from './components/DashboardFeature'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyUs />
        <DashboardFeature />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
