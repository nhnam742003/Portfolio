import React from 'react'
import "./portfolio.css"

const img1 = "https://image.tienphong.vn/600x315/Uploaded/2023/ofh-zsaomzte/2021_06_15/untitled-design-7625.png"
const img2 = "https://afamilycdn.com/150157425591193600/2021/3/22/4-1616386241232218887413.jpeg"
const img3 = "https://img5.thuthuatphanmem.vn/uploads/2021/11/07/hinh-anh-lisa-black-pink-dep_103856136.jpg"
const img4 = "https://nld.mediacdn.vn/291774122806476800/2021/12/28/lisa-1-1640671695514590724989.jpg"
const img5 = "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/9/27/photo-1632743174106-16327431742922125488746.jpg"
const img6 = "https://dep.com.vn/wp-content/uploads/2022/01/phong-cach-thoi-trang-hoi-huong-vintage-cua-lisa-featured-image.jpg"

const data = [
    {
        id: 1,
        image: img1,
        title: "Born as Pranpriya Manobal on March",
        github: "https://github.com"
    },
    {
        id: 2,
        image: img2,
        title: ' As an only child, she was raised by her Thai ',
        github: "https://github.com"
    },
    {
        id: 3,
        image: img3,
        title: 'Lisa\'s mother is named Brüschweiler',
        github: "https://github.com"
    },
    {
        id: 4,
        image: img4,
        title: 'Her stepfather is Marco Brüschweiler',
        github: "https://github.com"
    },
    {
        id: 5,
        image: img5,
        title: 'After starting dance classes of four',
        github: "https://github.com"
    },
    {
        id: 6,
        image: img6,
        title: 'We Zaa Cool alongside BamBam of Got7',
        github: "https://github.com"
    }
]
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My recent work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {
                    data.map(({ id, image, title, github }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div class="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                                    <a href="https://www.instagram.com/lalalalisa_m/" className='btn btn-primary' target="_blank" rel="noreferrer">Live demo</a>
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
