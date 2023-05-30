import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Card, Divider, CardContent, Typography, Box, Grid } from '@mui/material';
import { contentStyle } from '../Styles/ContentStyles';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';

const CryptoCoins = () => {

    const { classes } = contentStyle();
    const { data, isFetching } = useGetCryptosQuery();
    const cryptoList = data && data.data && data.data.coins && data.data.coins;
    if (isFetching) return 'Loading...';

    return (
        <div>
            <Typography variant="h2" align='center' className={classes.boldHeading}>
                Top Cryptocurrencies in the world
            </Typography>
            <br />
            <Grid container spacing={4} className={classes.padding20}>
                {cryptoList && cryptoList.map((coin, index) => (
                    <Grid item sm={4} key={index}>
                        <Card variant="outlined">
                            <CardContent >
                                <Link key={coin.uuid} to={coin.coinrankingUrl} target="blank" className={classes.linkStyles}>
                                    <Grid container className={classes.flexDisplay}>
                                        <Grid item>
                                            <Typography variant="h6" className={classes.coinNameText}>
                                                {`${index + 1}. ${coin.name}`}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <img src={coin.iconUrl} width="30px" height="30px" />
                                        </Grid>
                                    </Grid>
                                    <Divider /><br />
                                </Link>
                                <Typography sx={{ fontSize: 14 }}>
                                    {`Price: ${coin.price}`}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }}>
                                    {`Market Cap: ${coin.marketCap}`}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }}>
                                    {`Daily Change: ${coin.change}`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </div>
    );
}

export default CryptoCoins;