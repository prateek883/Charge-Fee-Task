import { Grid } from '@material-ui/core'
import React from 'react'
import './FooterProducts.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function FooterProducts() {
    return (
        <div className="footerProducts">
            <Grid container justify="space-between" className="footerProducts__container" >
                <Grid item xs={6} md={3} >
                    <h1>Subscription Management  <ArrowForwardIcon /> </h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h1>Subscription Management <ArrowForwardIcon /> </h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h1>Subscription Management <ArrowForwardIcon /> </h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h1>Subscription Management  <ArrowForwardIcon /> </h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
            </Grid>
           </div>
    )
}

export default FooterProducts
