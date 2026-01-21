const Services = () => {
  const services = [
    {
      icon: "🌐",
      name: "Web Development",
      description: "Modern, responsive web applications built with latest technologies"
    },
    {
      icon: "📱",
      name: "Mobile Applications",
      description: "Native and cross-platform mobile solutions for iOS and Android"
    },
    {
      icon: "🏢",
      name: "Enterprise Software",
      description: "Scalable business solutions tailored to your organizational needs"
    },
    {
      icon: "☁️",
      name: "Cloud Solutions",
      description: "AWS, Azure, and GCP expertise for cloud infrastructure"
    },
    {
      icon: "📊",
      name: "ERP Systems",
      description: "Complete enterprise resource planning implementations"
    },
    {
      icon: "🎨",
      name: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Border gradient animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
