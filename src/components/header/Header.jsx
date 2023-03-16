import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello</h5>
                <h1>Lisa</h1>
                <h5 className="text-light">Dancer</h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                <div className='me'>
                    <img src="https://photo-cms-baophapluat.epicdn.me/w840/Uploaded/2023/gznrxgmabianhgzmath/2021_08_20/lisa-blackpink3-1300.jpeg" alt='Lisa' />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
