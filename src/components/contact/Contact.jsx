import React from 'react'
import "./contact.css"
import { HiOutlineMailOpen } from "react-icons/hi"
import { AiFillMessage } from "react-icons/ai"
import { AiTwotonePhone } from "react-icons/ai"
import emailjs from "emailjs-com"
import { useRef } from "react"

const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t4vwgu3', 'template_uuduw4i ', form.current, 'YOUR_PUBLIC_KEY')
        e.target.reset()
    };


    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <HiOutlineMailOpen className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>nhnam742003@gmail@gmail.com</h5>
                        <a href="mailto:nhnam742003@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <AiFillMessage className='contact__option-icon' />
                        <h4>Messager</h4>
                        <h5>Hoang Nam</h5>
                        <a href="https://m.me/xike.nam.942" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <AiTwotonePhone className='contact__option-icon' />
                        <h4>Phone</h4>
                        <h5>+012 345 678</h5>
                        <a href="012 345 678" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* end of contact options  */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Your full name" name='name' required className='contact__option-icon' />
                    <input type="email" placeholder="Your name" name='email' required className='contact__option-icon' />
                    <textarea name='message' rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
