import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 text-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-6 inline-block"
        >
          <span className="bg-blue-500/20 border border-blue-400/50 text-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
            🚀 Welcome to Innovation
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight break-words"
        >
          BitStack{" "}
          <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Technologies
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-3 sm:mb-4 text-blue-100 leading-relaxed px-2"
        >
          Transforming Ideas Into Powerful Digital Solutions
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-10 text-gray-300 px-2"
        >
          Enterprise-grade software engineering for Schools, Hospitals, Banks & Institutions. Scalable. Secure. Reliable.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get Started Today
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-16 text-center px-2"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
