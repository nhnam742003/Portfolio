import React from 'react'
import "./nav.css"
import { IoIosHome } from "react-icons/io"
import { FiUsers } from "react-icons/fi"
import { BsBook } from "react-icons/bs"
import { FaHandshake } from "react-icons/fa"
import { MdOutlineConnectWithoutContact } from "react-icons/md"
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")

    return (
        <nav>
            <a href="#" onClick={() => {
                setActiveNav("#")
            }} className={activeNav === "#" ? "active" : ""}><IoIosHome /></a>
            <a href="#about" onClick={() => {
                setActiveNav("#about")
            }} className={activeNav === "#about" ? "active" : ""}><FiUsers /></a>
            <a href="#experience" onClick={() => {
                setActiveNav("#experience")
            }} className={activeNav === "#experience" ? "active" : ""}><BsBook /></a>
            <a href="#services" onClick={() => {
                setActiveNav("#services")
            }} className={activeNav === "#services" ? "active" : ""}><FaHandshake /></a>
            <a href="#contact" onClick={() => {
                setActiveNav("#contact")
            }} className={activeNav === "#contact" ? "active" : ""}><MdOutlineConnectWithoutContact /></a>
        </nav>
    )
}

export default Nav
