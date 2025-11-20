import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to make text visible */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Learn traffic laws
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold py-3">
          the smart way
        </h2>

        <h4 className="text-base sm:text-lg md:text-xl px-2 sm:px-8 leading-relaxed">
          Interactive lessons, real-world scenarios, and comprehensive testing
          to help you become a <br className="hidden sm:block" />
          confident, law-abiding driver.
        </h4>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button
            onClick={() => navigate("/login")}
            className="bg-lime-500 rounded-md px-8 py-3 text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Start Learning
          </button>

          <button className="rounded-md px-10 py-3 border border-lime-400 text-lime-100 font-medium hover:bg-lime-600/20 transition">
            Take Quiz
          </button>
        </div>
      </div>
    </section>
  );
}
