import React, { useEffect, useState } from 'react'
import * as MUI from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import NewsCard from '../NewsCard/NewsCard';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    feedList: {

    },
})); 

const Feed = () => {
    const classes = useStyles();
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        var url = 'http://newsapi.org/v2/top-headlines?country=ru&apiKey=1ee769da2a2348279e40ce764a8845f0';

        axios.get(url)
        .then(function (response) {
            const responseCardsData = response.data.articles;
            setNewsData(responseCardsData);
        })
        .catch(function (error) {
            console.log(error);
        });

    }, []);

    return (
        <MUI.Container maxWidth="lg" className={classes.feedList}>

            {
                newsData?.length ? newsData.map((article, index) => (
                    <NewsCard 
                        key={index} 
                        date={article.publishedAt}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        imageSrc={article.urlToImage}
                    />
                )) : ''
            }

        </MUI.Container>
    )
}

export default Feed
