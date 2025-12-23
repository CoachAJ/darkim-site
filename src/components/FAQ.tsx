import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What is the Inner Circle?",
      answer: "The Inner Circle is Darkim Be Allah's exclusive Patreon community where members get unreleased music, 5% Nation wisdom, direct access to Darkim through personal messages and live Q&A sessions, behind-the-scenes studio content, and exclusive merch. It's a direct connection to authentic hip-hop culture without algorithms or corporate interference."
    },
    {
      question: "How do I get exclusive tracks?",
      answer: "Sign up for our email list to get a free unreleased track immediately. For ongoing access to exclusive music, early album releases, and special remixes, join the Inner Circle on Patreon where new exclusive content is released regularly."
    },
    {
      question: "What platforms is Darkim Be Allah on?",
      answer: "You can find Darkim Be Allah's music on Apple Music, Spotify, Amazon Music, and other major streaming platforms. Follow on Instagram (@AllahsFruit, @AllahChrist), X (@AllahChrist), YouTube (FameLabsVideos, @DarkimBeAllahChrist), Facebook, and support directly on Patreon."
    },
    {
      question: "What is 5% Nation?",
      answer: "The Five-Percent Nation, also known as the Nation of Gods and Earths, is a cultural and spiritual movement founded in Harlem in 1964. Darkim Be Allah is a teacher in this tradition, sharing knowledge about self-awareness, consciousness, and the divine nature of the Black man and woman through his music and teachings."
    },
    {
      question: "How is Darkim connected to Wu-Tang?",
      answer: "Darkim Be Allah signed with Wu-Tang Records in 1996 and produced RZA's legendary 'Twelve Jewelz' on Gravediggaz' second album 'The Pick, the Sickle and the Shovel.' He's been a cornerstone of NYC hip-hop foundation and continues to work with Wu-Tang affiliates and underground legends."
    },
    {
      question: "Can I book Darkim for shows or features?",
      answer: "Yes! For booking inquiries, contact booking@darkimbeallah.com. Whether it's live performances, studio features, or production work, reach out with your details and we'll get back to you."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-black">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Darkim Be Allah and the Inner Circle.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gold/20 rounded-lg overflow-hidden hover:border-gold/40 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <svg 
                  className={`w-5 h-5 text-gold transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-900/50">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

{/* FAQ Schema Markup - rendered via dangerouslySetInnerHTML for proper JSON-LD */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}

export default FAQ
