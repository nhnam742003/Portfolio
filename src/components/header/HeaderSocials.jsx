
import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import { SiTiktok } from "react-icons/si"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
            <a href="https://instagram.com" target="_blank"><AiOutlineInstagram /></a>
            <a href="https://tiktok.com" target="_blank"><SiTiktok /></a>
        </div>
    )
}

export default HeaderSocials
