import React from 'react'
import "./about.css"
import { FaAward } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import { MdOutlineFolderShared } from "react-icons/md"

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src="https://i.ytimg.com/vi/aEiznLJCb9o/maxresdefault.jpg" alt='Lisa' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ year working</small>
                        </article>
                        {/* -------------------  */}
                        <article className='about__card'>
                            <FaUserCircle className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ worldwide</small>
                        </article>
                        {/* ------------------  */}
                        <article className='about__card'>
                            <MdOutlineFolderShared className='about__icon' />
                            <h5>Projects</h5>
                            <small>89+ completed</small>
                        </article>
                    </div>
                    <p>Her performances are always so breathtaking and natural. I've never seen such anyone in Kpop that is as charming as Lisa is. She does not have the typical convenient korean standards but she has her own unique beauty and charm going and that's what's makes her so attractive to international audiences</p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
