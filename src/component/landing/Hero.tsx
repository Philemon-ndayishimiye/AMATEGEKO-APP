export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-family-playfair bg-linear-to-r from-lime-600 to-green-300 bg-clip-text text-transparent font-semibold leading-tight">
          Learn traffic laws
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-family-poppins font-semibold py-3">
          the smart way
        </h2>

        <h4 className="text-base sm:text-lg md:text-xl font-family-playfair px-2 sm:px-8 leading-relaxed">
          Interactive lessons, real-world scenarios, and comprehensive testing to help you become a <br className="hidden sm:block" />
          confident, law-abiding driver.
        </h4>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button className="bg-linear-to-r from-lime-400 to-green-500 rounded-md px-8 py-3 text-white font-medium shadow-md hover:opacity-90 transition">
            Start Learning
          </button>

          <button className="rounded-md px-10 py-3 border border-lime-400 text-lime-600 font-medium hover:bg-lime-50 transition">
            Take Test
          </button>
        </div>
      </div>
    </section>
  );
}
