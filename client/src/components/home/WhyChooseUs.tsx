const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "🏗️",
      title: "Scalable Architecture",
      description: "Built for growth - our solutions scale seamlessly with your business"
    },
    {
      icon: "🔐",
      title: "Security First",
      description: "Enterprise-grade security with compliance standards (ISO, GDPR, HIPAA)"
    },
    {
      icon: "👨‍💼",
      title: "Expert Team",
      description: "10+ years experience with certified architects and senior engineers"
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Dedicated support team available round-the-clock for your needs"
    },
    {
      icon: "⚡",
      title: "Performance Optimized",
      description: "Lightning-fast applications with optimized code and infrastructure"
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We invest in your success with transparent communication and collaboration"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
            Why Choose BitStack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-leading expertise combined with customer-centric service
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted By Leading Organizations
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">00+</div>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">00+</div>
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">0.0%</div>
              <p className="text-gray-600 mt-2">Uptime SLA</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">00+</div>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
