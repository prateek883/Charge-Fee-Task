import { Grid } from '@material-ui/core'
import React from 'react'
import "./Products.css"

function Solution() {
    return (
        <div className="products">
            <Grid container >
            <Grid container justify="space-between">
                <Grid item xs={2}>
                    <h1>By Role</h1>
                    <h2>Finance </h2>
                    <h2>Sale</h2>
                    <h2>RevOps</h2>
                </Grid>
                <Grid item xs={2}>
                    <h1>By Role</h1>
                    <h2>Finance </h2>
                    <h2>Sale</h2>
                    <h2>RevOps</h2>
                </Grid>
                <Grid item xs={2}>
                    <h1>By Role</h1>
                    <h2>Finance </h2>
                    <h2>Sale</h2>
                    <h2>RevOps</h2>
                    <h2>RevOps</h2>
                </Grid>
                <Grid item xs={2}>
                    <h1>By Role</h1>
                    <h2>Finance </h2>
                    <h2>Sale</h2>
                    <h2>RevOps</h2>
                </Grid>
                <Grid item xs={2}>
                    
                </Grid>
                <Grid item xs={2}>
                    
                </Grid>
            </Grid>
            
            
          </Grid>
        </div>
    )
}

export default Solution 


