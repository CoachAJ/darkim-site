import antediluvianKingCoverUrl from '../../images/darkim-be-allah-x-endemic-emerald-antediluvian-king-lp.jpg'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gold mb-6">
            Legacy Over Algorithms.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Exclusive music, wisdom, and direct access from Bronx-bred hip-hop veteran Darkim Be Allah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.patreon.com/cw/RandomJewels"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Join the Inner Circle
            </a>
            <button 
              onClick={() => document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
            >
              Get Exclusive Track
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Wu-Tang Elements Producer & 5% Teacher
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From signing with Wu-Tang Records in 1996 to producing RZA's legendary "Twelve Jewelz" 
              on Gravediggaz' second album, Darkim has been a cornerstone of NYC hip-hop foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wu-Tang Affiliate */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">W</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Wu-Tang Affiliate</h3>
              <p className="text-gray-400">
                Signed to Wu-Tang Records, produced for RZA and the legendary Gravediggaz collective.
              </p>
            </div>

            {/* Key Collaborators */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Elite Collaborations</h3>
              <p className="text-gray-400">
                Works with Planet Asia, Tragedy Khadafi, and the entire Fame Labs crew of underground legends.
              </p>
            </div>

            {/* Press Quote */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">📰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Critical Acclaim</h3>
              <p className="text-gray-400">
                "Grown Up Rap - intelligent, hard-hitting hip hop that refuses to age because its truths are eternal."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              What You Get in the Inner Circle
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Direct access to the mind and music of a true underground legend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Exclusive Music */}
            <div className="text-center p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="text-4xl mb-4">🎶</div>
              <h3 className="text-xl font-semibold text-white mb-3">Exclusive Music</h3>
              <p className="text-gray-400">
                Unreleased tracks, early access to new albums, and exclusive remixes you won't find anywhere else.
              </p>
            </div>

            {/* Knowledge & Conversation */}
            <div className="text-center p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">Knowledge & Conversation</h3>
              <p className="text-gray-400">
                5% Nation wisdom, hip-hop history lessons, and deep conversations about the culture and consciousness.
              </p>
            </div>

            {/* Direct Access */}
            <div className="text-center p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-semibold text-white mb-3">Direct Access</h3>
              <p className="text-gray-400">
                Personal messages, live Q&A sessions, and behind-the-scenes content from the studio and beyond.
              </p>
            </div>

            {/* Limited Merch */}
            <div className="text-center p-6 border border-gold/20 rounded-lg hover:border-gold/40 transition-colors">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-white mb-3">Limited Merch</h3>
              <p className="text-gray-400">
                Exclusive apparel, vinyl pressings, and collectibles available only to Inner Circle members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Release Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Album Cover */}
            <div className="text-center lg:text-left">
              <img
                src={antediluvianKingCoverUrl}
                alt="Antediluvian King album cover"
                className="w-80 h-80 rounded-lg mx-auto lg:mx-0 mb-6 object-cover border border-gold/20"
              />
            </div>

            {/* Album Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Antediluvian King
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                A masterclass in 5% philosophy and underground hip-hop. "Antediluvian" means "before the flood" - 
                a conceptual return to when kings were recognized as Gods. Darkim applies timeless wisdom to modern chaos, 
                speaking directly to police violence, pandemics, and civil unrest with prescient clarity.
              </p>
              <p className="text-gray-400 mb-8">
                Featuring production by Endemic Emerald with samples from '70s German progressive rock, 
                recorded and pressed on wax via London for uncompromising quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://music.amazon.com/artists/B008B56WU8/darkim-be-allah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Buy Direct
                </a>
                <a
                  href="https://open.spotify.com/artist/1kVxIOLoDQhladQfYBIOdd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Listen Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section id="email-capture" className="section-padding bg-black">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Stay Connected. Stay Independent.
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free unreleased track and exclusive audio lessons when you join our mailing list. 
            No algorithms, no corporate interference - just direct connection to the source.
          </p>
          
          <form 
            name="email-capture" 
            method="POST" 
            data-netlify="true"
            action="/thank-you"
            className="max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="email-capture" />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-gray-800 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Get Free Track
              </button>
            </div>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Your email stays with us, not the algorithms.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

export default Home
