const IndustriesPage = () => {
  const industries = [
    {
      icon: "🎓",
      name: "Education & Schools",
      description: "Learning management systems, student portals, and administrative tools",
      solutions: [
        "Student Information Systems",
        "Learning Management Platforms",
        "Virtual Classroom Solutions",
        "Grade & Attendance Management"
      ]
    },
    {
      icon: "🏥",
      name: "Healthcare & Hospitals",
      description: "Hospital management, patient records, and telemedicine solutions",
      solutions: [
        "Hospital Management Systems",
        "Electronic Health Records",
        "Appointment Scheduling",
        "Telemedicine Platforms"
      ]
    },
    {
      icon: "🏦",
      name: "Banking & Finance",
      description: "Secure banking platforms, fintech solutions, and payment systems",
      solutions: [
        "Core Banking Solutions",
        "Digital Wallet Platforms",
        "Payment Gateways",
        "Investment Management Systems"
      ]
    },
    {
      icon: "🏢",
      name: "Enterprise & Corporate",
      description: "Custom enterprise software, automation, and digital transformation",
      solutions: [
        "ERP Systems",
        "CRM Solutions",
        "Business Intelligence",
        "Workflow Automation"
      ]
    },
    {
      icon: "🚀",
      name: "Startups & SMEs",
      description: "MVP development, scaling infrastructure, and rapid prototyping",
      solutions: [
        "MVP Development",
        "Scalable Architecture",
        "Cloud Infrastructure",
        "DevOps Solutions"
      ]
    },
    {
      icon: "🏭",
      name: "Manufacturing & Supply Chain",
      description: "Manufacturing management, inventory tracking, and logistics solutions",
      solutions: [
        "Manufacturing Execution Systems",
        "Inventory Management",
        "Supply Chain Tracking",
        "Quality Control Systems"
      ]
    },
    {
      icon: "🏪",
      name: "Retail & E-Commerce",
      description: "E-commerce platforms, POS systems, and inventory management",
      solutions: [
        "E-commerce Platforms",
        "POS Systems",
        "Inventory Management",
        "Customer Analytics"
      ]
    },
    {
      icon: "🌱",
      name: "Agriculture & Agritech",
      description: "Farm management systems, crop monitoring, and market integration",
      solutions: [
        "Farm Management Software",
        "Crop Monitoring Systems",
        "Farmer Marketplaces",
        "Weather Analytics"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Proven expertise across diverse sectors with industry-specific solutions
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {industry.description}
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-3">Our Solutions:</p>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-blue-500 font-bold">→</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We have experience building custom solutions for virtually any sector. Our flexible approach allows us to adapt our expertise to your unique business requirements.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition">
            Tell Us About Your Industry
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
