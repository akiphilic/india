import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#1A4065] rounded-full p-2">
              <Heart size={24} color="#FFCA0A" fill="#FFCA0A" />
            </div>
            <div>
              <p className="text-[#1A4065]" style={{ fontWeight: '600', fontSize: '1.125rem' }}>
                Jhamtse Gatsal
              </p>
              <p className="text-[#A7B867]" style={{ fontSize: '0.75rem' }}>
                Community of Compassion
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#1A4065]' : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: isActive('/') ? '600' : '400' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-[#1A4065]' : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: isActive('/about') ? '600' : '400' }}
            >
              About Us
            </Link>
            <Link
              to="/education"
              className={`transition-colors ${
                isActive('/education') ? 'text-[#1A4065]' : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: isActive('/education') ? '600' : '400' }}
            >
              Education
            </Link>
            <Link
              to="/impact"
              className={`transition-colors ${
                isActive('/impact') ? 'text-[#1A4065]' : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: isActive('/impact') ? '600' : '400' }}
            >
              Impact
            </Link>
            <Link
              to="/get-involved"
              className={`transition-colors ${
                isActive('/get-involved') ? 'text-[#1A4065]' : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: isActive('/get-involved') ? '600' : '400' }}
            >
              Get Involved
            </Link>
            <Link
              to="/donate"
              className={`transition-colors ${
                isActive('/donate') ? 'text-[#1A4065]' : 'text-gray-600 hover:text-[#1A4065]'
              }`}
              style={{ fontWeight: isActive('/donate') ? '600' : '400' }}
            >
              Donate
            </Link>
            
            {/* CTA Button */}
            <Link to="/donate">
              <button
                className="bg-[#FFCA0A] text-[#1A4065] px-6 py-2 rounded-[15px] transition-all hover:bg-[#FFD940] hover:shadow-lg flex items-center gap-2"
                style={{ fontWeight: '600' }}
              >
                <Heart size={18} fill="currentColor" />
                Support Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A4065]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              className={`block py-2 ${
                isActive('/') ? 'text-[#1A4065]' : 'text-gray-600'
              }`}
              style={{ fontWeight: isActive('/') ? '600' : '400' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 ${
                isActive('/about') ? 'text-[#1A4065]' : 'text-gray-600'
              }`}
              style={{ fontWeight: isActive('/about') ? '600' : '400' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/education"
              className={`block py-2 ${
                isActive('/education') ? 'text-[#1A4065]' : 'text-gray-600'
              }`}
              style={{ fontWeight: isActive('/education') ? '600' : '400' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              to="/impact"
              className={`block py-2 ${
                isActive('/impact') ? 'text-[#1A4065]' : 'text-gray-600'
              }`}
              style={{ fontWeight: isActive('/impact') ? '600' : '400' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              to="/get-involved"
              className={`block py-2 ${
                isActive('/get-involved') ? 'text-[#1A4065]' : 'text-gray-600'
              }`}
              style={{ fontWeight: isActive('/get-involved') ? '600' : '400' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              to="/donate"
              className={`block py-2 ${
                isActive('/donate') ? 'text-[#1A4065]' : 'text-gray-600'
              }`}
              style={{ fontWeight: isActive('/donate') ? '600' : '400' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Link>
            <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
              <button
                className="w-full bg-[#FFCA0A] text-[#1A4065] px-6 py-3 rounded-[15px] flex items-center justify-center gap-2"
                style={{ fontWeight: '600' }}
              >
                <Heart size={18} fill="currentColor" />
                Support Now
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}