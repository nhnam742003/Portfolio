import React from 'react'
import "./testimonials.css"
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: "https://a-static.besthdwallpaper.com/blackpink-s-lisa-in-ice-cream-m-v-photoshoot-the-album-wallpaper-2048x1536-61104_26.jpg",
        name: "Lisa kiss",
        review: "She is best known as a member of the popular K-pop a Thai rapper and singer who is a member of the South Korean girl group BLACKPINK. The song was released on September 10, 2021, and it was the lead single from Lalisa's debut solo album of the same name. The song received critical acclaim and commercial success"
    },
    {
        avatar: "https://media.kbizoom.com/media/2022/07/22085721/lisa-21072022-3.webp",
        name: "Lisa cute",
        review: "YG Entertainment for several years before debuting with BLACKPINK in 2016. Lisa has gained a massive following on social media, with millions of followers on Instagram and YouTube"
    },
    {
        avatar: "https://i.pinimg.com/736x/d8/33/4a/d8334a0a51e14e5c40cc5829d0030f1d.jpg",
        name: "Lisa tiny",
        review: "In 2021, Lisa made her solo debut with the single which was the lead single from her debut solo album of the same name. The song and album received critical acclaim and commercial success, with \"Lalisa\" breaking several records and topping charts in several countries"
    },
    {
        avatar: "https://cdn.i-scmp.com/sites/default/files/styles/og_twitter_scmp_generic/public/d8/images/canvas/2021/10/06/e53e560b-856a-4261-b90e-0a367c8cc64f_58c12217.jpg?itok=4jHlgw-G&v=1633508987",
        name: "Lisa look down",
        review: "Overall, Lisa's talent, hard work, and dedication to her craft have made her one of the most successful and influential K-pop artists of her generation. She continues to inspire fans around the world with her music, dancing, and fashion sense, and her future as an artist looks very bright"
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
                // install Swiper modules
                modules={[Pagination]}
                navigation
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} />
                                </div>
                                <h5>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
