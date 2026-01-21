const AboutPage = () => {
  const team_values = [
    {
      title: "Excellence",
      description: "We commit to delivering world-class solutions with attention to detail"
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative problem-solving"
    },
    {
      title: "Integrity",
      description: "We build trust through transparency and honest communication"
    },
    {
      title: "Collaboration",
      description: "We work as true partners with our clients to achieve shared success"
    }
  ];

  const milestones = [
    { year: "2014", achievement: "Founded BitStack Technologies" },
    { year: "2016", achievement: "Delivered 10th successful project" },
    { year: "2018", achievement: "Expanded to 50+ team members" },
    { year: "2020", achievement: "Achieved ISO 27001 certification" },
    { year: "2022", achievement: "50+ projects completed milestone" },
    { year: "2024", achievement: "100+ satisfied clients worldwide" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About BitStack
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transforming businesses through innovative digital solutions since 2014
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              BitStack Technologies was founded in 2014 with a simple mission: to deliver exceptional software solutions that transform businesses. What started as a small team of passionate developers has grown into a recognized leader in enterprise software development.
            </p>
            <p>
              Over the past decade, we've partnered with hundreds of organizations—from startups to Fortune 500 companies—helping them navigate their digital transformation journeys. Our expertise spans across multiple industries including education, healthcare, finance, and enterprise sectors.
            </p>
            <p>
              Today, BitStack is proud to be a trusted partner for organizations that demand excellence, security, and innovation. We continue to invest in our team, technology, and processes to ensure we deliver world-class solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team_values.map((value) => (
              <div
                key={value.title}
                className="p-8 bg-white rounded-2xl border border-blue-200/50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={milestone.year} className="flex gap-6 items-start">
                <div className="w-24 flex-shrink-0">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pb-6 border-l-2 border-blue-200 pl-6">
                  <div className="w-4 h-4 bg-blue-600 rounded-full absolute -ml-8 mt-1"></div>
                  <p className="text-lg text-gray-700">
                    {milestone.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Projects Delivered</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-blue-100">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how BitStack can help you achieve your business goals through innovative technology solutions.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
