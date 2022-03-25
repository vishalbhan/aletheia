import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

export default function ServicesItem({ title, items }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="line" data-scroll data-scroll-offset="0,10%"></div>
      
      <a className={`services-header text-cream ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="overflow-hidden">
          <h2 data-scroll data-scroll-offset="0,20%">{title}</h2>
        </div>
        <BsChevronDown size="26" />
      </a>

      <div className="line" data-scroll data-scroll-offset="0,10%"></div>

      <div className={`services-items text-left grid-2 ${open ? 'open' : ''}`} data-scroll data-scroll-offset="0,10%">
        {
          items.map(item => (
            <div className="services-item fade-up" data-scroll data-scroll-offset="0,10%" key={`key-${item.title}`}>
              <p className="text-white">{item.title}</p>
              <div className="line" data-scroll data-scroll-offset="0,10%"></div>
              <p className="sm">{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
