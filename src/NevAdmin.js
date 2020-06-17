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
    },
    link:{
        textDecoration:'none',
        color:'black',
        textAlign:'center',
    }
});

export default function NevAdmin() {
    let { path, url } = useRouteMatch();
    const match = useRouteMatch();

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
                    <ListItem button>
                        <Link to={`${match.path}/adminhome`}>
                            <ListItemText className={classes.link}  primary={'Set home/portfolio images '} />
                        </Link>

                    </ListItem>
                <ListItem button>

                    <Link to={`${match.path}/adminvanity`}>
                        <ListItemText className={classes.link}  primary={'Set vanity images '} />
                    </Link>
                </ListItem>
                <ListItem button>

                    <Link to={`${match.path}/adminmosaic`}>
                        <ListItemText className={classes.link}   primary={'Set mosaic images '} />
                    </Link>
                </ListItem>

                <ListItem button>

                    <Link to={`${match.path}/adminstarp`}>
                        <ListItemText className={classes.link}  primary={'Set starp images '} />
                    </Link>
                </ListItem>
            </List>
            <Divider />
            <List>

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
                <Route  path={ `${match.url}/adminhome`} >
                    <AdminHome/>
                </Route>
            <Route  path={ `${match.url}/adminvanity`} >
                <AdminVanity/>
            </Route>
            <Route  path={ `${match.url}/adminmosaic`} >
                <AdminMosaic/>
            </Route>
            <Route  path={ `${match.url}/adminstarp`} >
                <AdminStarp/>
            </Route>


            </Switch>
          </Router>

        </div>

);
}
