import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NevAdmin from "./NevAdmin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminVanity from "./AdminVanity";
import AdminMosaic from "./AdminMosaic";
import AdminStarp from "./AdminStarp";

const useStyles = makeStyles((theme) => ({


    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    position:{
        position:'relative',
        top:'150px',
        right:'50px',
        zIndex:'1'
    }

}));

export default function AdminPannal() {
    const classes = useStyles();

    return (
        <div>


            <div className={classes.position}>
                <NevAdmin/>
                <Router>


                </Router>

            </div>
        </div>
    );
}
