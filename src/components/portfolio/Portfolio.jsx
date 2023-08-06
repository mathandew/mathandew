import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hall.PNG'
import IMG2 from '../../assets/News.PNG'
import IMG3 from '../../assets/bloggers.PNG'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Events Hall Booking System',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'News Daily',
    github: '',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'My Blogs',
    github: '',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" disabled>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio