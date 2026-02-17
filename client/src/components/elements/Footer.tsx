import { useState } from "react";
import { subscribeNewsletter } from "../../api/api";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = {
    Product: ['Features', 'Pricing', 'Security', 'Enterprise'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'Guides', 'API Reference', 'Community'],
    Legal: ['Privacy', 'Terms', 'Compliance', 'Contact']
  };

  const social = [
    { icon: '🔗', label: 'LinkedIn', href: '#' },
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: '💬', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' }
  ];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return alert("Enter email");

    try {
      setLoading(true);
      const res = await subscribeNewsletter(email);
      alert(res.data.message);
      setEmail("");
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-lg text-gray-900">BitStack</span> */}
              <img src="/logo.png" alt="logo" className="h-12 w-36"/>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Engineering scalable digital solutions for institutions and enterprises.
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(sections).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold text-gray-900 mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © {currentYear} BitStack Technologies. All rights reserved.
            </p>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <div className="text-xs text-gray-600 bg-white px-3 py-2 rounded-full border border-gray-200">
              🔒 ISO 27001
            </div>
            <div className="text-xs text-gray-600 bg-white px-3 py-2 rounded-full border border-gray-200">
              ✓ GDPR
            </div>
            <div className="text-xs text-gray-600 bg-white px-3 py-2 rounded-full border border-gray-200">
              🏥 HIPAA
            </div>
          </div>
        </div>

        {/* Newsletter Section (Optional) */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <div className="flex gap-2 md:flex-row flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button onClick={handleSubscribe} disabled={loading} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
