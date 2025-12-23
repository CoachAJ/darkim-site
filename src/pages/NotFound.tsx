import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-max text-center">
        <h1 className="text-9xl font-serif font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist. Like a lost Wu-Tang verse, it's nowhere to be found.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary text-lg px-8 py-4">
            Return Home
          </Link>
          <a 
            href="https://www.patreon.com/cw/RandomJewels"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-8 py-4"
          >
            Join the Inner Circle
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
