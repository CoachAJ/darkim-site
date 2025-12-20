const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold mb-6">
                Darkim Be AllahChrist
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Wu-Tang Elements Producer, 5% Teacher, Underground Legend
              </p>
              <p className="text-lg text-gray-400">
                From the Bronx to the world, carrying the torch of authentic hip-hop culture 
                and consciousness for over three decades.
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
                Darkim Be AllahChrist isn't just an artist; he is a cornerstone of the NYC hip-hop foundation. 
                From the moment he signed with Wu-Tang Records in 1996, Darkim has been delivering that gritty, 
                soul-infused underground flavor that defines the essence of the culture.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As a "Wu-Tang Elements" producer and affiliate, his pedigree is undeniable—most notably exemplified 
                by his production of the legendary RZA solo track "Twelve Jewelz" on the Gravediggaz' second album. 
                This wasn't just a beat; it was a statement that positioned him among the elite architects of 
                East Coast underground hip-hop.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                But Darkim's identity extends far beyond music production. As a 5% teacher of the Nation of Gods & Earths, 
                he brings knowledge of self that has no birth record. His 2020 masterpiece, "Antediluvian King," 
                is a masterclass in this philosophy. The term "Antediluvian" translates to "before the flood," 
                a conceptual return to a time when kings were recognized as Gods.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                His writing is incredibly prescient; even when penned before the chaos of 2020, his lyrics spoke 
                directly to the intensity of police violence, global pandemics, and worldwide civil unrest. 
                He doesn't just rap; he applies ancient wisdom to the struggles of humanity today.
              </p>
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
