const InnerCircle = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold mb-6">
            The Inner Circle
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the exclusive community of true hip-hop heads who understand that legacy transcends algorithms. 
            Direct access to Darkim Be Allah's wisdom, music, and consciousness.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center">
              The Philosophy
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As a teacher of the Nation of Gods & Earths (5% Nation), Darkim Be Allah brings knowledge of self 
                that has no birth record. The Inner Circle is more than a fan club - it's a digital cipher where 
                ancient wisdom meets modern struggle.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                In a world dominated by algorithms and corporate gatekeepers, we maintain independence. 
                No streaming service controls our narrative. No social media platform dictates our reach. 
                This is direct connection - artist to audience, teacher to student, God to God.
              </p>
              <blockquote className="border-l-4 border-gold pl-6 italic text-xl text-gold">
                "Knowledge and wisdom that has no birth record, applied to the chaos of the modern world."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Breakdown */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
            Membership Tiers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Tier */}
            <div className="border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <h3 className="text-2xl font-serif font-bold text-gold mb-4">Student</h3>
              <div className="text-3xl font-bold text-white mb-6">$9<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Monthly exclusive track releases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Weekly knowledge drops & audio lessons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Access to private community forum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Early access to new releases</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Join as Student</button>
            </div>

            {/* Scholar Tier */}
            <div className="border-2 border-gold rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-4">Scholar</h3>
              <div className="text-3xl font-bold text-white mb-6">$19<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Everything in Student tier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Monthly live Q&A sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Behind-the-scenes studio content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Exclusive merchandise discounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Direct message privileges</span>
                </li>
              </ul>
              <button className="btn-primary w-full">Join as Scholar</button>
            </div>

            {/* God Tier */}
            <div className="border border-gold/20 rounded-lg p-8 hover:border-gold/40 transition-colors">
              <h3 className="text-2xl font-serif font-bold text-gold mb-4">God</h3>
              <div className="text-3xl font-bold text-white mb-6">$39<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Everything in Scholar tier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Monthly physical vinyl/CD shipments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Exclusive limited edition merchandise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Personal voice messages from Darkim</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-gray-300">Priority access to live events</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Join as God</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
            What Members Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gold/20">
              <p className="text-gray-300 mb-4">
                "This isn't just music, it's education. Darkim breaks down the science behind the culture 
                in ways that make you see hip-hop completely different."
              </p>
              <div className="text-gold font-semibold">- Marcus K., Scholar Member</div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gold/20">
              <p className="text-gray-300 mb-4">
                "The knowledge drops alone are worth the membership. Real 5% science applied to 
                everything from music production to daily life."
              </p>
              <div className="text-gold font-semibold">- Aisha M., God Tier Member</div>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gold/20">
              <p className="text-gray-300 mb-4">
                "Finally, an artist who understands that legacy is more important than likes. 
                This is how hip-hop should be preserved and passed down."
              </p>
              <div className="text-gold font-semibold">- Jerome L., Student Member</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Join the Circle?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Step into a community where knowledge meets beats, where wisdom flows as freely as the music, 
            and where your support directly fuels independent artistry.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  )
}

export default InnerCircle
