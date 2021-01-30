import { Grid } from '@material-ui/core'
import React from 'react'
import "./Products.css"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

function Products() {
    return (
        <div className="products">
            <Grid container >
            <Grid container justify="space-between">
                <Grid item xs={2}>
                    <h1>Subscription Management</h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
                <Grid item xs={2}>
                    <h1>Subscription Management</h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
                <Grid item xs={2}>
                    <h1>Subscription Management</h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
                <Grid item xs={2}>
                    <h1>Subscription Management</h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
                <Grid item xs={2}>
                    <h1>Subscription Management</h1>
                    <h2>Overview</h2>
                    <h2>Create & Manage Plans</h2>
                    <h2>Pricing Management</h2>
                    <h2>Handle Trial Subscriptions</h2>
                    <h2>Handle Trial Subscriptions</h2>
                </Grid>
            </Grid>
            <Grid container className="products__items" >
           
                <Grid item   xs={12} >
                    <p> Supports: <span>Stripe</span> , <span>Paypal</span> , <span>Braintree</span> ,
                        <span>Checkout.com</span> , <span>GoCardless</span> , and <span>27 other payment gateways</span>
                     </p>
                </Grid>
                <Grid item   xs={12} alignItems="start">
                    <p> Seamless integration with <span>Xero</span> , <span>Quickbooks</span> , <span>Zendesk</span> , <span>Salesforce</span> , and <span>18 others</span> 
                    </p>
                </Grid>
                <Grid item   xs={12} alignItems="start">
                    <h4>Explore all features <ArrowForwardOutlinedIcon /> </h4>
                </Grid>
            </Grid>
          </Grid>
        </div>
    )
}

export default Products 
