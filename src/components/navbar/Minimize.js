import { Button, Grid, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './Minimize.css'
import { Link } from 'react-router-dom';

function Minimize({user}) {
    
    return (
        <div className="minimize"  >
            
            <Grid container>
                <Grid container>
                    <Grid item xs={12}>
                        <h1>products</h1>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <h2>Subscription Management</h2>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <h2>Billing Automation</h2>
                    </Grid>
                   
                    <Grid item xs={12} sm={3} >
                        <h2>Recurring Payments</h2>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <h2>Accounting & Taxes</h2>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <h2>Reporting & Analytics</h2>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <h1>products</h1>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <h3>Subscription Management</h3>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                        <h2>Accounting & Taxes</h2>
                        <h2>Billing Automation</h2>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <h3>Subscription Management</h3>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                    </Grid>
                   
                    <Grid item xs={12} sm={3} >
                        <h3>Subscription Management</h3>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <h3>Subscription Management</h3>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        <h3>Subscription Management</h3>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                        <h2>Billing Automation</h2>
                    </Grid>
                   
                </Grid>
                <Grid container >
                    <Grid item xs={12} sm={6} > 
                    {user ?<h5> Hi , {user} </h5>  :
                        <Button className="minimize__button"
                         component={Link} 
                       to={'/login'} >Login</Button> }
                    </Grid>
                    <Grid item xs={12} sm={6} > 
                        <Button className="minimize__button" >Subscription Management</Button>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Minimize 