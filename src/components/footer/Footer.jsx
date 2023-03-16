import React from 'react'
import "./footer.css"
import { SlSocialFacebook } from "react-icons/sl"
import { AiOutlineInstagram } from "react-icons/ai"
import { GrYoutube } from "react-icons/gr"

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>LOGO</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href="https://facebook.com"><SlSocialFacebook /></a>
                <a href="https://instagram.com"><AiOutlineInstagram /></a>
                <a href="https://youtube.com"><GrYoutube /></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; Lisa tutorials services</small>
            </div>
        </footer>
    )
}

export default Footer
