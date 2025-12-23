import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-max text-center">
        <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6">
          Welcome to the Movement
        </h1>
        <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Check your email for your free unreleased track and exclusive audio lessons.
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          You're now connected directly to the source. No algorithms, no corporate interference - just authentic hip-hop wisdom and music.
        </p>
        
        <div className="bg-gray-900 border border-gold/20 rounded-lg p-8 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Take It Further
          </h2>
          <p className="text-gray-300 mb-6">
            Join the Inner Circle on Patreon for exclusive music, 5% Nation wisdom, direct access to Darkim, and limited merch.
          </p>
          <a 
            href="https://www.patreon.com/cw/RandomJewels"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-block"
          >
            Join the Inner Circle
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-secondary px-6 py-3">
            Return Home
          </Link>
          <a 
            href="https://music.apple.com/us/artist/darkim-be-allah/375131526"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-yellow-400 transition-colors px-6 py-3"
          >
            Listen on Apple Music →
          </a>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
