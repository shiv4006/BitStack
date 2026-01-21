const ServicesPage = () => {
  const services = [
    {
      icon: "🌐",
      name: "Web Development",
      description: "Modern, responsive web applications built with latest technologies",
      features: [
        "React, Vue, Angular expertise",
        "Responsive design",
        "Performance optimization",
        "SEO friendly"
      ]
    },
    {
      icon: "📱",
      name: "Mobile Applications",
      description: "Native and cross-platform mobile solutions for iOS and Android",
      features: [
        "Native iOS & Android",
        "React Native & Flutter",
        "Cross-platform compatibility",
        "App store optimization"
      ]
    },
    {
      icon: "🏢",
      name: "Enterprise Software",
      description: "Scalable business solutions tailored to your organizational needs",
      features: [
        "Custom business logic",
        "Integration services",
        "Scalable architecture",
        "Enterprise support"
      ]
    },
    {
      icon: "☁️",
      name: "Cloud Solutions",
      description: "AWS, Azure, and GCP expertise for cloud infrastructure",
      features: [
        "Cloud migration",
        "Infrastructure as Code",
        "Cloud security",
        "Cost optimization"
      ]
    },
    {
      icon: "📊",
      name: "ERP Systems",
      description: "Complete enterprise resource planning implementations",
      features: [
        "SAP expertise",
        "Oracle implementation",
        "Custom ERP development",
        "Data migration"
      ]
    },
    {
      icon: "🎨",
      name: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      features: [
        "User research",
        "Wireframing",
        "Prototyping",
        "User testing"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="group relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 text-sm">Key Features:</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-blue-500 font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts help you choose the right service for your needs.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
