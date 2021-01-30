import { Button, Grid } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Products from '../navbar/Products';
import FooterProducts from './FooterProducts';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer">
             <Grid container>
                
           
            <Grid container>
            <Grid container className="footer__grid--container" >
                <Grid item xs={12} md={8}>
                    <h1>Still unsure? Step Inside and See <br />
                    What The Future Looks Like.</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                <div className="header__button">
                    <Button variant="contained" color="primary" size="large" className="header__button--filled">
                        Schedule a Demo 
                        <ArrowForwardOutlinedIcon />
                    </Button>
                </div>
                </Grid>
                <Grid item xs={12}>
                    <hr />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <FooterProducts />
            </Grid>
            
            </Grid>
                <Grid container justify="space-between"  className="footer__logo" >
                    
                    <Grid item xs={12} sm={4} >
                    <h2>Chargebee</h2>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <FacebookIcon />
                        <TwitterIcon />
                        <YouTubeIcon />
                        <LinkedInIcon />
                    </Grid>
                   
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer 