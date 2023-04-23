import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { execTest } from '../lib/api/test';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


function BodyCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [message, setMessage] = useState<string>("")

    const handleExecTest = async () => {
    const res = await execTest()

    if (res.status === 200) {
      setMessage(res.data.message)
    }
  }

  useEffect(() => {
    handleExecTest()
  }, [])


    return (
        <Card variant="outlined">
            <CardContent>
            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                adjective
            </Typography>
            <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography> */}
            <h1>{message}</h1>
            </CardContent>
            
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default BodyCard
