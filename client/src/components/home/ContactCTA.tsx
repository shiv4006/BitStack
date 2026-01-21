const ContactCTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Transform Your Business?
        </h2>

        <p className="text-xl md:text-2xl text-blue-100 mb-4">
          Let's build something amazing together
        </p>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          Whether you're looking to modernize your infrastructure, build new applications, or scale your existing systems, our expert team is ready to help you succeed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
            Schedule a Free Consultation
          </button>
          <button className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300">
            Send us an Email
          </button>
        </div>

        {/* Contact info */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-2xl mb-3">📧</div>
            <p className="text-sm text-gray-400 mb-2">Email Us</p>
            <p className="text-white font-semibold">hello@bitstack.tech</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-2xl mb-3">📞</div>
            <p className="text-sm text-gray-400 mb-2">Call Us</p>
            <p className="text-white font-semibold">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="text-2xl mb-3">📍</div>
            <p className="text-sm text-gray-400 mb-2">Visit Us</p>
            <p className="text-white font-semibold">Tech Hub, Silicon Valley</p>
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-4">
            Trusted by 100+ companies worldwide. Available 24/7 for support.
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <span>✓ ISO 27001 Certified</span>
            <span>✓ GDPR Compliant</span>
            <span>✓ Enterprise SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
