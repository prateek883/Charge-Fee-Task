import { Grid, Hidden, IconButton } from '@material-ui/core'
import React from 'react'
import googleImg from '../../images/nature.jpg'
import Login from '../Login/Login'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import "./Signup.css"
import { Link } from 'react-router-dom';

function Signup({ setUser}) {
    return (
        <div className="signup">
            <div className="message__back">
                <IconButton  component={Link} 
                    to={'/'} >
                    <ArrowBackIcon style={{ color: 'white'}} />
                </IconButton>
            </div>
            <Grid container > 
                <Hidden smDown>
                    <Grid item xs={12} md={6}>
                        <img src={googleImg} className="signup__google--img" />
                    </Grid>
                </Hidden>
                
                <Grid item xs={12} md={6}>
                    <Login setUser={setUser} />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Signup
