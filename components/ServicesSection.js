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
        <div className="mobile-services">
          <h1 data-scroll className="fade-up">Our Services</h1>
          <div className="mobile-service-item">
            <h2 data-scroll>School Tuition</h2>
            <div className="line" data-scroll></div>
            <div className="services-item fade-up" data-scroll>
              <p>lower school (up to 16)</p>
              <p>upper school (16+)</p>
            </div>
          </div>
          <div className="mobile-service-item">
            <h2 data-scroll>University Tuition</h2>
            <div className="line" data-scroll></div>
            <div className="services-item fade-up" data-scroll>
              <p>undergraduate</p>
              <p>postgraduate</p>
            </div>
          </div>
          <div className="mobile-service-item">
            <h2 data-scroll>Mentoring &amp; Advice</h2>
            <div className="line" data-scroll></div>
            <div className="services-item fade-up" data-scroll>
              <p>university applications</p>
              <p>careers advice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
