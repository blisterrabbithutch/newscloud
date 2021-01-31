import React from 'react'
import logo from '../../img/logo.svg'
import * as MUI from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    logo: {
    //   backgroundColor: theme.palette.test,
        width: 224,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 70,
    },
    link: {
        color: 'black',
        textDecoration: 'none',
        borderBottom: `2px solid transparent`,
        '&:not(:last-child)': {
            marginRight: 40,
        },
        '&.is-active': {
            color: theme.palette.primary.main,
            borderBottom: `2px solid ${theme.palette.primary.main}`,
        },
    },
    navigation: {
        display: "flex",
    }
}));

function Header() {
    const classes = useStyles();
    return (
        <MUI.Container maxWidth="lg" className={classes.header}>
            <img src={logo} alt="Logo" className={classes.logo}/>
            <div className={classes.navigation}>
                <NavLink to="/" className={classes.link} activeClassName="is-active" exact>
                    <MUI.Typography variant="h6">
                        Главная
                    </MUI.Typography>
                </NavLink>
                <NavLink to="/feed" className={classes.link} activeClassName="is-active" exact>
                    <MUI.Typography variant="h6">
                        Лента
                    </MUI.Typography>
                </NavLink>
                {/* <MUI.Link href="#" className={classes.link}>
                    <MUI.Typography variant="h6">
                        Избранное
                    </MUI.Typography>
                </MUI.Link> */}
            </div>
        </MUI.Container>
    )
}

export default Header
