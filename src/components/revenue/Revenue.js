import { Button, Grid } from '@material-ui/core'
import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import "../billing/Billing.css"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import revenueImg from "../../images/revenue.svg"

function Revenue() {
    return (
        <div className="billing"> 
            <Grid container>
                <Grid item xs={12} md={6} className="billing__grid--left" >
                    <h4>No more lost opportunities</h4>
                    <h1>Streamline Revenue Operations</h1>
                    <h3>Plug revenue leaks by aligning GTM & Finance. Uncover growth opportunities across processes, geographies, and business models.</h3>
                    <div className="billing__div--points">
                        <p> <CheckIcon /> SaaS Analytics </p>
                        <p> <CheckIcon /> Quote-to-cash </p>
                        <p> <CheckIcon /> Order-to-revenue </p>
                        <p> <CheckIcon /> Revenue Recognition </p>
                    </div>
              <Button varient="outline" className="billing__button" >
                  Learn More <ArrowForwardOutlinedIcon />
              </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src = {revenueImg} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Revenue
