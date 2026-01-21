const Solutions = () => {
  const industries = [
    {
      icon: "🎓",
      name: "Schools & Universities",
      description: "Learning management systems, student portals, and administrative tools"
    },
    {
      icon: "🏥",
      name: "Healthcare",
      description: "Hospital management, patient records, and telemedicine solutions"
    },
    {
      icon: "🏦",
      name: "Banking & Finance",
      description: "Secure banking platforms, fintech solutions, and payment systems"
    },
    {
      icon: "🏢",
      name: "Enterprises",
      description: "Custom enterprise software, automation, and digital transformation"
    },
    {
      icon: "🚀",
      name: "Startups",
      description: "MVP development, scaling infrastructure, and rapid prototyping"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven expertise across diverse sectors with industry-specific solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative p-6 bg-white rounded-xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300 origin-left">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg">
            Don't see your industry? <span className="font-bold text-blue-600">We build custom solutions for any sector.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
