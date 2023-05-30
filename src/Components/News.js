import { Card, CardContent, MenuItem, TextField, Typography, Grid, CardActions, Button } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useGetNewsQuery } from '../services/cryptoNewsApi';
import { contentStyle } from '../Styles/ContentStyles';
import { Link } from 'react-router-dom';

const News = () => {

  const [topic, setTopic] = useState('bitcoin');
  const { data, isFetching } = useGetNewsQuery(topic);
  const news = data && data.articles && data.articles;
  const { classes } = contentStyle();

  useEffect(() => {
    if (isFetching) {
      <h2 color="#000000">Loading.........</h2>
    }
  });

  const handleCryptoTopicChange = (e) => {
    //const subject = e && e.target.value && e.target.value.toLowerCase();
    setTopic(e && e.target.value && e.target.value.toLowerCase());
  };

  return (
    <div>
      <Typography variant="h2" align='center' className={classes.boldHeading}>
        Latest crypto news
      </Typography>
      <br />

      <Grid container alignContent="center" justifyContent="center">
        <Grid item sm={3}>
          <TextField
            select
            variant="outlined"
            label="Select crypto coin"
            fullWidth
            color="info"
            onChange={handleCryptoTopicChange}
            defaultValue={"bitcoin"}
          >
            <MenuItem key="0" value="bitcoin">Bitcoin</MenuItem>
            <MenuItem key="1" value="nft">NFT</MenuItem>
            <MenuItem key="2" value="altcoin">Altcoin</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <br />

      <Grid container spacing={4}>
        {news && news.map((news) => (
          <Grid item sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" >
                  {news.title}
                </Typography>
                <Typography>
                  {news.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={news.url} target="blank">
                  <Button size="small" color="primary">
                    VIEW MORE
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default News;
