import React from 'react'
import PRF192 from "../../PRF192.pdf"

const CTA = () => {
    return (
        <div className='cta'>
            <a href={PRF192} download className='btn'>Download</a>
            <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
    )
}

export default CTA
