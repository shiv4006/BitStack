const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900">
            About BitStack Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              BitStack Technologies is a <span className="font-bold text-blue-900">cutting-edge software solutions provider</span> dedicated to delivering scalable, secure, and reliable digital platforms for institutions and enterprises.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over a decade of experience, we specialize in building custom solutions for <span className="font-bold text-blue-900">Schools, Hospitals, Banks, and Large Enterprises</span> that require world-class software infrastructure.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of expert developers, architects, and designers work collaboratively to transform complex business challenges into elegant, efficient digital solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Highly skilled professionals with proven track record</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">Proven Expertise</h4>
                  <p className="text-gray-600">50+ successful projects across diverse industries</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">Quality First</h4>
                  <p className="text-gray-600">Commitment to excellence in every project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl opacity-10 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-gray-700 font-semibold">Years of Excellence</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <p className="text-gray-700 font-semibold">Satisfied Clients</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-700 font-semibold">Delivered Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
