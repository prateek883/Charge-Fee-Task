import { Button, Grid } from '@material-ui/core'
import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import "../billing/Billing.css"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import  subscriptionImg  from '../../images/subscription.svg';

function Subscription() {
    return (
        <div className="billing"> 
            <Grid container>
                
                <Grid item xs={12} md={6}>
                    <img src = {subscriptionImg} style = {{    transform: "translateX(-100px)"}}/>
                </Grid>
                <Grid item xs={12} md={6} className="billing__grid--left" style={{paddingLeft: "80px"}} >
                    <h4>No more developer dependency</h4>
                    <h1>Smarter Subscription Management</h1>
                    <h3>Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.</h3>
                    <div className="billing__div--points">
                        <p> <CheckIcon /> Price modeling </p>
                        <p> <CheckIcon /> Product Catalog </p>
                        <p> <CheckIcon /> Trial management </p>
                        <p> <CheckIcon /> Lifecycle automation </p>
                    </div>
              <Button varient="outline" className="billing__button" >
                  Learn More <ArrowForwardOutlinedIcon />
              </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Subscription
