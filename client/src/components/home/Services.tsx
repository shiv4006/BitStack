const Services = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          "Web Development",
          "Mobile Applications",
          "Enterprise Software",
          "Cloud Solutions",
          "ERP Systems",
          "UI/UX Design"
        ].map((service) => (
          <div
            key={service}
            className="p-6 bg-white shadow rounded-xl text-center font-semibold"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
