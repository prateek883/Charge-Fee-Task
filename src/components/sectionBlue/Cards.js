import { Button, Chip, Grid } from '@material-ui/core'
import React from 'react'
import cardImg1 from '../../images/cardImg-1.png'
import cardImg2 from '../../images/cardImg-2.png'
import cardImg3 from '../../images/cardImg-3.png'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <Grid container >
            <Grid container justify="space-between" >
                <Grid item xs={12} md={5} style={{marginTop:"50px !important"}} >
                    <h4>Quote-to-Cash Automation</h4>
                    <h1>Powers Sales and Marketing CRM</h1>
                    <img src={cardImg1 } />
                    <h2>Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM.</h2>
                    <Button variant="contained" className="cards__button" >
                        Learn more
                        <ArrowForwardOutlinedIcon />
                    </Button>
                </Grid>
                <Grid item xs={12} md={5} style={{marginTop:"50px !important"}} >
                <h4>Quote-to-Cash Automation</h4>
                    <h1>Powers Sales and Marketing CRM</h1>
                    <div className="cards__chip--div" ><Chip size="small" label="Preffered Partner" className="cards__chip" /></div>
                    <img src={cardImg2 } />
                    <h2>Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM.</h2>
                    <Button variant="contained" className="cards__button" >
                        Learn more
                        <ArrowForwardOutlinedIcon />
                    </Button>
                </Grid>
                <Grid item xs={12} md={5} style={{marginTop:"50px !important"}} >
                    <h4>Streamline Finance Operations</h4>
                    <h1>Syncs with Accounting Software</h1>
         
                    
                    <img src={cardImg3 } />
                    <h2>Reconcile books in seconds, handle compliance, and recognize revenue painlessly.</h2>
                    <Button variant="contained" className="cards__button" >
                        Learn more
                        <ArrowForwardOutlinedIcon />
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={{marginTop:"100px"}} >
                <Grid item xs={12} md={5} >
                    <p className="para">
                    Talk to us today about <br />
                    your revenue workflow
                    </p>
                </Grid>
                <Grid item xs={12} md={5} >
                    <div className="cards__button--low">
                    <Button variant="contained" color="primary" size="large" className="header__button--filled">
                        Schedule a Demo 
                        <ArrowForwardOutlinedIcon />
                    </Button>
                    </div>
                   
                </Grid>
            </Grid>
            </Grid>
           
            <hr className="cards__hr" />
        </div>
    )
}

export default Cards