import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AdminHome from "./AdminHome";
import AdminMosaic from "./AdminMosaic";
import AdminStarp from "./AdminStarp";
import AdminVanity from "./AdminVanity";
import Messages from './Messages'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    button:{
        background:'red',
        color:'white',
        position: 'absolute',
        overflow: 'hidden',
        top:'-34px',
        left: '131px',
    },
    link:{
        textDecoration:'none',
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:'25px'
    }
});

export default function NevAdmin() {
    let { path, url } = useRouteMatch();
    const match = useRouteMatch();
    console.log(match);
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to={`${match.path}/adminhome`}>
                <ListItem button>
                        <ListItemText className={classes.link}  primary={'Set home/portfolio images '} />

                </ListItem>
                </Link>
                <Link to={`${match.path}/adminvanity`}>
                <ListItem button>
                        <ListItemText className={classes.link}  primary={'Set vanity images '} />
                </ListItem>
                </Link>
                <Link to={`${match.path}/adminmosaic`}>
                <ListItem button>
                        <ListItemText className={classes.link}   primary={'Set mosaic images '} />
                </ListItem>
                </Link>
                <Link  to={`${match.path}/adminstarp`}>
                <ListItem button>
                        <ListItemText className={classes.link}  primary={'Set starp images '} />
                </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to={`${match.path}/message`}>
                    <ListItem button>
                        <ListItemText className={classes.link}   primary={'User Messages '} />
                    </ListItem>
                </Link>
            </List>
        </div>
    )


    return (

        <div>
            <br/>
            <br/>
            <br/>
            <br/>

                <Router>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button className={classes.button} onClick={toggleDrawer(anchor, true)}>Menu</Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}

                <Switch>
                    <Route exact  path={ `${match.url}/adminhome`} >
                        <AdminHome/>
                    </Route>
                    <Route exact path={ `${match.url}/adminvanity`} >
                        <AdminVanity/>
                    </Route>
                    <Route exact  path={ `${match.url}/adminmosaic`} >
                        <AdminMosaic/>
                    </Route>
                    <Route exact path={ `${match.url}/adminstarp`} >
                        <AdminStarp/>
                    </Route>
                    <Route exact path={ `${match.url}/message`} >
                        <Messages/>
                    </Route>

                </Switch>
                </Router>
        </div>

    );
}