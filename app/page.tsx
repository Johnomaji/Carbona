import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Proof from '@/components/Proof'
import Metrics from '@/components/Metrics'
import Problem from '@/components/Problem'
import Platform from '@/components/Platform'
import FeatureTabs from '@/components/FeatureTabs'
import Output from '@/components/Output'
import Workflow from '@/components/Workflow'
import Testimonial from '@/components/Testimonial'
import Team from '@/components/Team'
import Security from '@/components/Security'
import Developer from '@/components/Developer'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Proof />
        <Metrics />
        <Problem />
        <Platform />
        <FeatureTabs />
        <Output />
        <Workflow />
        <Testimonial />
        <Team />
        <Security />
        <Developer />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
