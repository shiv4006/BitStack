const Solutions = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {["Schools", "Hospitals", "Banks", "Enterprises", "Startups"].map(i => (
          <span
            key={i}
            className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium"
          >
            {i}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
