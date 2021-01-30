import React from 'react'
import Billing from './billing/Billing'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import Revenue from './revenue/Revenue'
import Bottom from './sectionBlue/Bottom'
import Cards from './sectionBlue/Cards'
import Heading from './sectionBlue/Heading'
import Subscription from './subscription/Subscription'
import Animation from './animation/Animation.js'
import Footer from './footer/Footer'
import Slider from './sectionBlue/Slider.js'

function Homepage({user}) {
    return (
        <div>
            <Navbar user={user} />
            <Header />
            <Animation />
            <Billing />
            <Subscription />
            <Revenue />
            <div className="temp" ></div>
            <section className="blue" >
                <div className="purple"></div>
                <div className="content">
                <Heading />
                <Cards />
                <Bottom />
                </div>
            </section>
            <div className="bottom__rel" > <Slider /> </div>
            <Footer />
        </div>
    )
}

export default Homepage
