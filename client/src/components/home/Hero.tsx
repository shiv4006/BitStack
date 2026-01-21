const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-4 sm:mb-6 inline-block">
          <span className="bg-blue-500/20 border border-blue-400/50 text-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
            🚀 Welcome to Innovation
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fadeIn break-words">
          BitStack <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Technologies</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-3 sm:mb-4 text-blue-100 leading-relaxed px-2">
          Transforming Ideas Into Powerful Digital Solutions
        </p>

        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-10 text-gray-300 px-2">
          Enterprise-grade software engineering for Schools, Hospitals, Banks & Institutions. Scalable. Secure. Reliable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
          <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-white/10 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-16 text-center px-2">
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300">50+</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">Projects Delivered</p>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300">100+</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">Happy Clients</p>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300">10+</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
