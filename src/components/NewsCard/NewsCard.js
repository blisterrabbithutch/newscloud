import React from 'react'
import * as MUI from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import notFound from '../../img/not-found.svg'

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: 30,
        overflow: 'hidden',
    },
    image: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    favoriteButton: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: theme.palette.primary.main,
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            filter: 'brightness(90%)',
        },
    },
    favoriteButtonIcon: {
        color: '#fff',
    },
    imageSection: {
        padding: 0,
        position: 'relative',
        display: 'flex',
    },
    descriptionSection: {
        padding: theme.spacing(2),
    },
    title: {
        marginBottom: 8,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    date: {
        lineHeight: '1.2',
    },
    description: {
        display: '-webkit-box',
        lineClamp: 3,
        boxOrient: 'vertical',
        overflow: 'hidden',
        marginBottom: 20,
        height: 60,
    },
    notFoundIcon: {
        margin: 'auto',
        width: 80,
        height: 80,
    },
}));

const NewsCard = ({ date, title, description, url, imageSrc }) => {
    const classes = useStyles();
    return (
        <MUI.Paper className={classes.card}>
            <MUI.Grid container spacing={0}>
                <MUI.Grid item xs={3} className={classes.imageSection}>
                    {
                        imageSrc ? <img draggable="false" src={imageSrc} alt="Фотография карточки" className={classes.image}/>
                        : <img draggable="false" src={notFound} alt="Фотография карточки" className={classes.notFoundIcon}/>
                    }
                    <MUI.IconButton aria-label="delete" className={classes.favoriteButton}>
                        <FavoriteIcon fontSize="small" className={classes.favoriteButtonIcon}/>
                    </MUI.IconButton>
                </MUI.Grid>
                <MUI.Grid item xs={9} className={classes.descriptionSection}>
                    <MUI.Typography variant="overline" display="block" className={classes.date} gutterBottom>
                        {date}
                    </MUI.Typography>
                    <MUI.Typography variant="h6" display="block" className={classes.title}>
                        {title}
                    </MUI.Typography>
                    <MUI.Typography variant="body2" display="block" className={classes.description}>
                        {description}
                    </MUI.Typography>
                    <MUI.Link target="_blank" href={url} className={classes.link}>
                        <MUI.Typography variant="button" display="block" color="primary">
                            Читать статью
                        </MUI.Typography>
                    </MUI.Link>
                </MUI.Grid>
            </MUI.Grid>
        </MUI.Paper>
    )
}

export default NewsCard
