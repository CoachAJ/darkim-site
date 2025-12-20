import { useState } from 'react'

const Tour = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    venue: '',
    city: '',
    date: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking inquiry submission
    console.log('Booking inquiry submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      venue: '',
      city: '',
      date: '',
      message: ''
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold mb-6">
            Live Performances
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the raw energy and conscious lyricism of Darkim Be Allah live. 
            From intimate venues to festival stages, every performance is a masterclass in authentic hip-hop.
          </p>
        </div>
      </section>

      {/* Upcoming Dates */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
            Upcoming Dates
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Tour Date 1 */}
            <div className="bg-black p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gold">MAR</div>
                  <div className="text-3xl font-bold text-white">15</div>
                  <div className="text-gray-400">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-white mb-1">The Underground Sessions</h3>
                  <p className="text-gray-300 mb-1">Brooklyn Bowl, Brooklyn NY</p>
                  <p className="text-gray-400 text-sm">with Planet Asia & Fame Labs Crew</p>
                </div>
                <div className="text-center md:text-right">
                  <button className="btn-secondary">Get Tickets</button>
                </div>
              </div>
            </div>

            {/* Tour Date 2 */}
            <div className="bg-black p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gold">APR</div>
                  <div className="text-3xl font-bold text-white">02</div>
                  <div className="text-gray-400">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-white mb-1">Knowledge & Beats Festival</h3>
                  <p className="text-gray-300 mb-1">The Fillmore, Philadelphia PA</p>
                  <p className="text-gray-400 text-sm">Special 5% Nation tribute set</p>
                </div>
                <div className="text-center md:text-right">
                  <button className="btn-secondary">Get Tickets</button>
                </div>
              </div>
            </div>

            {/* Tour Date 3 */}
            <div className="bg-black p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gold">MAY</div>
                  <div className="text-3xl font-bold text-white">18</div>
                  <div className="text-gray-400">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-white mb-1">Wu-Tang Elements Showcase</h3>
                  <p className="text-gray-300 mb-1">House of Blues, Boston MA</p>
                  <p className="text-gray-400 text-sm">Celebrating 30 years of Wu-Tang</p>
                </div>
                <div className="text-center md:text-right">
                  <button className="btn-secondary">Get Tickets</button>
                </div>
              </div>
            </div>

            {/* Tour Date 4 */}
            <div className="bg-black p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="text-center md:text-left">
                  <div className="text-2xl font-bold text-gold">JUN</div>
                  <div className="text-3xl font-bold text-white">22</div>
                  <div className="text-gray-400">2024</div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-white mb-1">Antediluvian King Tour</h3>
                  <p className="text-gray-300 mb-1">The Observatory, Santa Ana CA</p>
                  <p className="text-gray-400 text-sm">Full album performance</p>
                </div>
                <div className="text-center md:text-right">
                  <button className="btn-secondary">Get Tickets</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Performance Photos */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
            Live in Action
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photo placeholders */}
            <div className="aspect-square bg-gradient-to-br from-gold to-bronze rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-black mb-2">🎤</div>
                <p className="text-black font-semibold">Brooklyn Show 2023</p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-bronze to-gold rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-black mb-2">🎵</div>
                <p className="text-black font-semibold">Fame Labs Cypher</p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-gold to-bronze rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-black mb-2">👥</div>
                <p className="text-black font-semibold">Wu-Tang Reunion</p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-bronze to-gold rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-black mb-2">🔥</div>
                <p className="text-black font-semibold">Festival Energy</p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-gold to-bronze rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-black mb-2">🎧</div>
                <p className="text-black font-semibold">Studio Session</p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-bronze to-gold rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-black mb-2">🏆</div>
                <p className="text-black font-semibold">Award Night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Inquiry Form */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center">
              Book Darkim Be Allah
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Interested in booking Darkim for your venue, festival, or event? 
              Fill out the form below and we'll get back to you within 48 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-gray-300 mb-2">
                    Venue Name *
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                    placeholder="Venue or event name"
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                    City, State *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                    placeholder="City, State"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gold/20 rounded-lg text-white focus:outline-none focus:border-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                  placeholder="Tell us about your event, expected attendance, budget range, etc."
                />
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary text-lg px-8 py-4">
                  Submit Booking Inquiry
                </button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Or contact us directly:</p>
              <p className="text-gold">
                <a href="mailto:booking@darkimbeallah.com" className="hover:text-yellow-400">
                  booking@darkimbeallah.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Info */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">🎤</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Solo Sets</h3>
              <p className="text-gray-400">
                45-60 minute performances featuring classics and new material, 
                with optional Q&A segments about hip-hop history and 5% knowledge.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fame Labs Shows</h3>
              <p className="text-gray-400">
                Full crew performances with the Fame Labs family, 
                featuring collaborative sets and individual showcases from each member.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Wu-Tang Elements</h3>
              <p className="text-gray-400">
                Special Wu-Tang affiliated performances featuring rare tracks, 
                collaborations, and stories from the legendary collective's history.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tour
