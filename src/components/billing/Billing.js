import { Button, Grid } from '@material-ui/core'
import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import "./Billing.css"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import billingimg from "../../images/billing.svg"

function Billing() {
    return (
        <div className="billing"> 
            <Grid container>
                <Grid item xs={12} md={6} className="billing__grid--left" >
                    <h4>No more spreadsheet errors</h4>
                    <h1>Automate Recurring Billing</h1>
                    <h3>Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!</h3>
                    <div className="billing__div--points">
                        <p> <CheckIcon /> Billing Schedules </p>
                        <p> <CheckIcon /> Proration & Invoicing </p>
                        <p> <CheckIcon /> Tax management </p>
                        <p> <CheckIcon /> Payment Methods </p>
                    </div>
              <Button varient="outline" className="billing__button" >
                  Learn More <ArrowForwardOutlinedIcon />
              </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src = {billingimg} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Billing
