import { Button } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
function Header() {
    return (
        <div className="header">
            <h1>Subscription Billing & Revenue Operations</h1>
            <h2>for Fast-growth B2B SaaS</h2>
            <h3>Get the operational sophistication to achieve, sustain,
            and scale recurring revenue.</h3>
            <div className="header__button">
            <Button variant="contained" color="primary" size="large" className="header__button--filled">
                Schedule a Demo 
                <ArrowForwardOutlinedIcon />
            </Button>
            <Button variant="outline" color="primary" size="large"  className="header__button--outline">
                Sign up for Free
                <ArrowForwardOutlinedIcon />
            </Button>
            </div>
        </div>
    )
}

export default Header
