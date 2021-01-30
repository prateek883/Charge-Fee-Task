import React from 'react'
import './Heading.css'
import blueHeadingImage from '../../images/blueHeading.svg'

function Heading() {
    return (
        <div className="heading">
            <h1>
                Works With Your <br /> Revenue Management Stack
            </h1>
            <h2>
            Managing sales, payments, customer experience or your books: <br />
            if it affects your revenue cycle, Chargebee works with it.
            </h2>
            <img src={blueHeadingImage} />
        </div>
    )
}

export default Heading 

