import React from 'react'

const Content = () => {
    return (
        <main className='hero container'>
            <div className='hero-content'>
                <h1>PLAY WITH HEART & SOUL</h1>
                <p>Experience gaming like never before. Feel the rain patter on your hands, the crunch of footsteps on gravel, the satisfying tension of a pulled bowstring. The innovative DualSense controller brings every world to life with unmatched immersion.</p>

                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button>Explore</button>
                </div>

                <div>
                    <p>Also Availabe on</p>
                    <div className='brand-icons'>
                        <img src="images/flipkart.png" alt="" />
                        <img src="images/amazon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='hero-img'>
                <img src="images\main.jpeg" alt="" />
            </div>
        </main>
    )
}

export default Content
