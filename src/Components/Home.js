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
            <Grid container display="flex" justify="center" alignItems="center" spacing={10}>
                <Grid item sm={7}>
                    <Typography variant="h2" className={classes.boldHeading} style={{paddingLeft: "80px"}}>
                        Global Crypto Stats
                    </Typography>
                </Grid>
                <Grid item sm={5}>
                    <img src={home_image} width="300px" height="300px" />
                </Grid>
            </Grid>

            <br />
            <div>
                <Grid container display="flex" spacing={2}>
                    <Grid item sm={4}>
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

            </div>
        </div>
    )
}

export default Home;