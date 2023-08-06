import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/MD1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      {/* {<img src={ME} class="rounded-circle" alt="me" />} */}
      <div className="container header__container">
        {/* {<img src={ME} class="rounded-circle" alt="me" />} */}
        <h1>Mathan Dewpal</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header