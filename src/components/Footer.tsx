const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold/20 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-gold mb-4">Darkim Be Allah</h3>
            <p className="text-gray-400 mb-4">
              Legacy Over Algorithms. Exclusive music, wisdom, and direct access from Bronx-bred hip-hop veteran.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-gold transition-colors">Music</a></li>
              <li><a href="/inner-circle" className="text-gray-400 hover:text-gold transition-colors">Inner Circle</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-gold transition-colors">About</a></li>
              <li><a href="/tour" className="text-gray-400 hover:text-gold transition-colors">Tour</a></li>
              <li><a href="https://famelabsmusic.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">Fame Labs</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Booking: <a href="mailto:booking@darkimbeallah.com" className="text-gold hover:text-yellow-400">booking@darkimbeallah.com</a></p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.219-.438-.219-1.085c0-1.016.219-1.775.657-1.775.219 0 .438.219.438.657 0 .438-.219 1.095-.438 1.533-.219.657.219 1.314.876 1.314 1.095 0 1.752-1.533 1.752-3.285 0-1.314-.876-2.329-2.329-2.329-1.752 0-2.847 1.314-2.847 2.847 0 .438.219.876.438 1.314-.219.219-.438.219-.657.219-.438 0-.876-.438-.876-.876 0-1.533 1.095-2.847 2.847-2.847 1.752 0 3.285 1.314 3.285 3.285 0 2.329-1.314 3.942-3.285 3.942-.657 0-1.314-.219-1.533-.657-.219.438-.438 1.095-.657 1.533-.219.657-.438 1.314-.657 1.752C9.45 23.983 10.545 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Darkim Be Allah. All rights reserved. | Wu-Tang Elements | Fame Labs Music
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
