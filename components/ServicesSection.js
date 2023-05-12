import Image from 'next/image'
import ServicesItem from './ServicesItem'

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="text-left" data-scroll>
      <div className="container">
        <div className="desktop-services">

          <div className="overflow-hidden">
            <h1 data-scroll className="text-center fade-up">Our Services</h1>
          </div>

          {
            services.map((service, index) => (
              <ServicesItem
                key={index}
                title={service.title}
                items={service.items.map(item => ({
                  title: item.title,
                  description: item.description
                }))}
              />
            ))
          }

          

        </div>
      </div>
    </section>
  )
}
