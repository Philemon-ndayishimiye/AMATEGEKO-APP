import Footer from "../component/landing/Footer";
import Hero from "../component/landing/Hero";
import Navigation from "../component/landing/Navigation";

export default function LandingPage() {

  return (
    <div>
        <Navigation/>
        <div className="py-[]">
            <Hero/>
        </div>

        <div>
          <Footer/>
        </div>
    </div>
  )
}
