import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NevAdmin from "./NevAdmin";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


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
