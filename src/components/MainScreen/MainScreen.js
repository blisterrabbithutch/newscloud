import React from 'react'
import mainImage from '../../img/main-image.svg'
import * as MUI from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    mainScreen: {
        display: 'flex',
        position: 'relative',
    },
    titleSection: {
        maxWidth: 520,
        marginTop: 140,
        marginBottom: 100,
    },
    image: {
        width: 660,
        height: 550,
        display: 'block',
    },
    imageSection: {
        position: 'absolute',
        right: '-30px',
    }
}));

function MainScreen() {
    const classes = useStyles();
    return (
        <MUI.Container maxWidth="lg" className={classes.mainScreen}>
            <div className={classes.titleSection}>
                <MUI.Typography variant="h2" style={{marginBottom: 24, fontWeight: 700}}>
                    Ты всегда в курсе,
                    что происходит
                    в&nbsp;мире
                </MUI.Typography>
                <MUI.Typography variant="h5">
                    Простой агрегатор новостей.
                    Читай важнейшие новости со всего мира
                </MUI.Typography>
            </div>
            <div className={classes.imageSection}>
                <img draggable="false" className={classes.image} src={mainImage} alt="Изображение главного экрана"/>
            </div>
        </MUI.Container>
    )
}

export default MainScreen
