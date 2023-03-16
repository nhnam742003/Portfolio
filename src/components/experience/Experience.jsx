import React from 'react'
import "./experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = () => {
    return (
        <section id="experience">
            <h5>What skills I have?</h5>
            <h2>My experience</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Developer</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                    </div>
                </div>
                {/* End of Fronted  */}
                <div className='experience__backend'>
                    <h3>Backend Developer</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Python</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Node JS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>MongoDB</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>PHP</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        {/* ---------------------  */}
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>MySQL</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
                {/* End of backend  */}
            </div>
        </section>
    )
}

export default Experience
