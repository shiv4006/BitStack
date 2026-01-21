const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose BitStack
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
        {[
          "Scalable Architecture",
          "Secure Systems",
          "Expert Team",
          "24/7 Support"
        ].map(point => (
          <div key={point} className="p-6 bg-white rounded-xl shadow">
            {point}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
