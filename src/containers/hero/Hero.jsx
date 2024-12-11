import React from 'react'
import './hero.css'

//Assets
import hero_img from '../../assets/hero_img.png'
import hero_image from '../../assets/hero_image.png'

function Hero() {
    return (
        <>
        <div className='hero section-padding' id='home'>
            <div className='hero-content'>
                <h1 className='gradient-text'>I’m Maleesha Dewmini</h1>
                <h2>UI/UX Designer</h2>
                <p>To create intuitive, user-centered designs that enhance the overall experience and usability of digital products. A UI/UX designer strives to blend aesthetics with functionality, ensuring that every interaction is seamless, engaging, and aligned with user needs, while also achieving business goals.</p>
                <a href='#works' className='explore-btn'>Explore my works</a>

            </div>
            <div className='hero-image'>
                {/* <img src={hero_img} alt='Hero' /> */}
                <img src={hero_image} alt='Hero' />
            </div>
        </div>
        <div className='hero-scroll-animation'>
              <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div>
        </>
    )
}

export default Hero
