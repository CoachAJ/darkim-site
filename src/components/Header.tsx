import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-gold/20 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-gold">
            Darkim Be Allah
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gold transition-colors">
              Music
            </Link>
            <Link to="/inner-circle" className="text-white hover:text-gold transition-colors">
              Inner Circle
            </Link>
            <Link to="#" className="text-white hover:text-gold transition-colors">
              Merch
            </Link>
            <Link to="/tour" className="text-white hover:text-gold transition-colors">
              Tour
            </Link>
            <Link to="/about" className="text-white hover:text-gold transition-colors">
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/inner-circle" className="hidden md:block btn-primary">
            Join the Inner Circle
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold/20">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gold transition-colors">
                Music
              </Link>
              <Link to="/inner-circle" className="text-white hover:text-gold transition-colors">
                Inner Circle
              </Link>
              <Link to="#" className="text-white hover:text-gold transition-colors">
                Merch
              </Link>
              <Link to="/tour" className="text-white hover:text-gold transition-colors">
                Tour
              </Link>
              <Link to="/about" className="text-white hover:text-gold transition-colors">
                About
              </Link>
              <Link to="/inner-circle" className="btn-primary w-fit">
                Join the Inner Circle
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
