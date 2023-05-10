import Image from 'next/image'
import ServicesItem from './ServicesItem'

export default function ServicesSection() {
  return (
    <section id="services" className="text-left" data-scroll>
      <div className="container">
        <div className="desktop-services">

          {/* <div className="seahorse-1 illustration left" data-scroll data-scroll-speed="6" data-scroll-offset="0,10%">
            <div className="scale">
              <Image src={seahorseleft} alt="" priority />
            </div>
          </div> */}

          <div className="overflow-hidden">
            <h1 data-scroll className="text-center fade-up">Our Services</h1>
          </div>

          {/* School Tuition */}
          <ServicesItem
            title="School Tuition"
            items={[
              {
                title: 'lower school (up to 16)',
                description: 'In these early years, the bedrock of a successful life are laid, through an energised, wide-ranging approach to learning. By unlocking the element of play in their academic work, we enable our students to lay the foundations for effortless, independent learning throughout their school careers.'
              },
              {
                title: 'lower school (up to 16)',
                description: 'Whether students are struggling to keep up or not being stretched intellectually, we seek to improve performance by leaving the syllabus behind. Drawing on decades of experience with A-Levels, the International Baccalaureate, the US high school system, SATs and ACTs, we create unique programmes that incinerate old habits and ignite curiosity in our students. They emerge with a level of advanced knowledge and extracurricular activity that sets them apart from their peers and is essential for successful university applications.'
              }
            ]}
          />

          {/* Univerity Tuition */}
          <ServicesItem
            title="University Tuition"
            items={[
              {
                title: 'undergraduate',
                description: 'University can be daunting, whether grappling with new concepts, structuring academic work, establishing a routine or simply learning how to learn. Often, contact time with teaching staff is limited and questions arise faster than they can be answered during the bustle of term time. Aletheia provides the proximity of an Oxbridge tutorial or supervision anywhere in the world and at any time, supporting our undergraduates to proceed through their degrees with confidence and flair.'
              },
              {
                title: 'postgraduate',
                description: "From understanding the theoretical landscape in your degree to discovering a unique angle in your research, our roster of academic staff has seen it all. The unrivalled experience Aletheia's tutors bring to bear has helped students find confidence and direction with theses, research council grant applications, and job applications."
              }
            ]}
          />

          {/* Mentoring & Advice */}
          <ServicesItem
            title="University &amp; Careers Advice"
            items={[
              {
                title: 'university applications',
                description: "What differentiates the successful university application is the sum of small, subtle differences. Aletheia's guidance comes from within the academic system itself, furnishing our students with the insights and skills necessary to stand out from an already gifted crowd. Guided by their passions in tandem with our expertise, our alumni go on to find that happiness breeds excellence on their academic journeys."
              },
              {
                title: 'careers advice',
                description: "At Aletheia, scholarship is understood in the context of global citizenship. This is reflected in the calibre of our tutors, who are much more than scholars alone. Their industry experience spans diplomacy, finance, government, international organisations, medicine and the military, to name but a few. Aletheia's tutors bring all of this to bear, helping students embark on the journey of defining and achieving their own success."
              }
            ]}
          />

        </div>
      </div>
    </section>
  )
}
