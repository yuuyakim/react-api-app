import React from 'react'
import BodyCard from './BodyCard'
import { Grid } from '@material-ui/core'

function Content() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}> 
                <BodyCard />
            </Grid>
            <Grid item xs={4}> 
                <BodyCard />
            </Grid>
            <Grid item xs={4}> 
                <BodyCard />
            </Grid>
        </Grid>
    )
}

export default Content