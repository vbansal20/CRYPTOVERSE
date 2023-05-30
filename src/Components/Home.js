import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardActions, Button, Grid, Divider } from '@mui/material';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { contentStyle } from '../Styles/ContentStyles';
import home_image from '../images/homeImage.png';

const Home = () => {

    const { data, isFetching } = useGetCryptosQuery();
    const { classes } = contentStyle();
    console.log(data);
    const globalStats = data && data.data && data.data.stats && data.data.stats;

    if (isFetching) return 'Loading...';

    return (
        <div>
            <Grid container display="flex" spacing={10}>
                <Grid item sm={5}>
                    <Typography variant="h1" align='center' className={classes.boldHeading}>
                        Global Crypto Stats
                    </Typography>
                </Grid>
                <Grid item sm={7}>
                    <img src={home_image} width="400px" height="400px" />
                </Grid>
            </Grid>

            <br />
            <div>
                <Grid container display="flex" spacing={4}>

                    <Grid item spacing={4} direction="column">
                        <Grid item>
                            <Card >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Total Cryptocurrencies
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {globalStats.totalCoins}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Total Markets
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {globalStats.totalMarkets}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={4}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Total Exchanges
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {globalStats.totalExchanges}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    
                </Grid>

            </div>
        </div>
    )
}

export default Home;