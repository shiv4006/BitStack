import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src="/logo.png" alt="logo" className='w-40 h-16' />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`font-medium transition-colors duration-300 ${isActive(item.href)
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-gray-700 hover:text-blue-600'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-6">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-colors duration-300 ${isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-full font-semibold hover:shadow-lg mt-4">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
