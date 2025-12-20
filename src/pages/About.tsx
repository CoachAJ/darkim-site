const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold mb-6">
                Darkim Be Allah
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Wu-Tang Affiliate, A.I.G. Founding Member, Underground Legend
              </p>
              <p className="text-lg text-gray-400">
                Cerebral lyricism meets Five Percent Nation teachings — art and instruction for those who value substance over trends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 bg-gradient-to-br from-gold to-bronze rounded-lg mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-black mb-4">👑</div>
                  <p className="text-black font-semibold">Antediluvian King</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              The Foundation
            </h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Darkim Be Allah emerged from the NYC hip-hop underground during the 1990s, a time when lyricism, 
                knowledge, and cultural identity defined the artform. As a founding member of A.I.G. and an affiliate 
                of the Wu-Tang movement, Darkim contributed to projects that helped shape the era's raw, uncompromising sound.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Known for his cerebral lyricism and integration of Five Percent Nation teachings, Darkim's music stands 
                as both art and instruction — addressing self-knowledge, discipline, and social awareness. Over decades 
                of independent work, he has maintained creative control while cultivating a loyal global audience that 
                values substance over trends.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                In recent years, Darkim has continued to release critically respected projects, collaborate with 
                underground legends, and expand his artistic vision beyond music into teaching, storytelling, 
                and cultural preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Musical Style & Associations */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Musical Style */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-gold mb-6 flex items-center">
                <span className="mr-3">🎶</span> Musical Style
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Underground Hip-Hop
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Boom-Bap
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Conscious Hip Hop
                </li>
              </ul>
            </div>

            {/* Notable Associations */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-gold mb-6 flex items-center">
                <span className="mr-3">🤝</span> Notable Associations
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Wu-Tang Extended Family
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Gravediggaz
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Solomon Childs
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Planet Asia
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Tragedy Khadafi
                </li>
              </ul>
            </div>

            {/* Selected Discography */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-gold mb-6 flex items-center">
                <span className="mr-3">📀</span> Selected Discography
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Antediluvian King
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Child Famous
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Child King
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Wu-Tang Killa Bees – The Swarm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
            Legacy Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* 1996 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">1996</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gold mb-2">Wu-Tang Records Signing</h3>
                  <p className="text-gray-300">
                    Signed with Wu-Tang Records, establishing his place in the legendary collective's extended family. 
                    This marked the beginning of his journey as a Wu-Tang Elements producer.
                  </p>
                </div>
              </div>

              {/* Gravediggaz Production */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">GRAV</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gold mb-2">"Twelve Jewelz" Production</h3>
                  <p className="text-gray-300">
                    Produced RZA's legendary solo track "Twelve Jewelz" on Gravediggaz' second album, 
                    cementing his reputation as a master of the gritty, soul-infused sound that defines Wu-Tang's aesthetic.
                  </p>
                </div>
              </div>

              {/* Fame Labs Formation */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">FAME</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gold mb-2">Fame Labs Crew Formation</h3>
                  <p className="text-gray-300">
                    Founded Fame Labs, the independent powerhouse featuring Master Kbar, Supreme Just, Venge Milz, 
                    AllahReal, and 36Zero. Established collaborations with heavyweights like Planet Asia and Tragedy Khadafi.
                  </p>
                </div>
              </div>

              {/* Solo Discography */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">SOLO</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gold mb-2">Solo Career & A.I.G.</h3>
                  <p className="text-gray-300">
                    Released classic solo works including "Bronx War Story," "God In The Ghetto," "Sun Of Joseph," 
                    and "Chemical Burns." Formed A.I.G. with Allahwise, delivering consistent underground classics.
                  </p>
                </div>
              </div>

              {/* 2020 Antediluvian King */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">2020</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gold mb-2">Antediluvian King Masterpiece</h3>
                  <p className="text-gray-300">
                    Released his magnum opus "Antediluvian King," a prescient work that addressed global chaos 
                    with ancient wisdom. Collaborated with Endemic Emerald on production featuring '70s German progressive rock samples.
                  </p>
                </div>
              </div>

              {/* Present Day */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">NOW</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gold mb-2">Legacy Over Algorithms</h3>
                  <p className="text-gray-300">
                    Continues to build independent legacy through direct fan connection, upcoming "King Crush" EP, 
                    and the Inner Circle community. Proving that authentic artistry transcends digital trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
              The Architect's Vision
            </h2>
            <blockquote className="text-2xl text-gold italic mb-8">
              "Darkim Be AllahChrist functions like a master architect in a city of glass towers; 
              while others build for the moment, he uses ancient, 'antediluvian' stone and soulful NYC grit 
              to build structures that are meant to weather any storm the modern world throws at them."
            </blockquote>
            <p className="text-lg text-gray-300">
              This is more than music; it's "Grown Up Rap"—the kind of intelligent, hard-hitting hip-hop 
              that refuses to age because its truths are eternal.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Experience the Legacy
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the Inner Circle and become part of a movement that values substance over streams, 
            wisdom over viral moments, and legacy over algorithms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inner-circle" className="btn-primary text-lg px-8 py-4">
              Join the Inner Circle
            </a>
            <a href="https://famelabsmusic.com" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4">
              Visit Fame Labs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
