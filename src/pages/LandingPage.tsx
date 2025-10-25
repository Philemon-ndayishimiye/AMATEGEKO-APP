import Hero from "../component/landing/Hero";
import Navigation from "../component/landing/Navigation";

export default function LandingPage() {

  return (
    <div>
        <Navigation/>
        <div className="py-[3%]">
            <Hero/>
        </div>
    </div>
  )
}
