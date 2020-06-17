import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./protfolio";
import AdminPannal from "./AdminPannal";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Footer from "./footer";
import Mosaic from "./Mosaic";
import Vanity from "./Vanity";
import Starp from "./Starp";
import {createBrowserHistory} from "history";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './fonts.css'
import './assets/css/style.css';
import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NevAdmin from "./NevAdmin";
import AdminHome from "./AdminHome";
class App extends Component{
    state = {
        isOpen: false
    };


    toggleCollapse =()=>{
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        const history = createBrowserHistory()

        return (
            <div className="App">
                <Router history={history}>
                    <header id="header" className="fixed-top header-inner-pages">
                        <div className="container d-flex align-items-center">
                            <Navbar  className="container bg-light mr-auto" expand="lg">
                                <Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link><Link style={{borderBottom:'none'}}  to='/Home'>Home</Link></Nav.Link>
                                        <Nav.Link><Link style={{borderBottom:'none'}}  to='/About'>About</Link></Nav.Link>
                                        <Nav.Link><Link style={{borderBottom:'none'}}  to='/Contact'>Contact</Link></Nav.Link>
                                        <Nav.Link><Link style={{borderBottom:'none'}}  to='/Portfolio'>Portfolio</Link></Nav.Link>
                                        <NavDropdown title="Products" id="basic-nav-dropdown">
                                            <NavDropdown.Item><Link style={{borderBottom:'none'}}  to='/Vanity'>Vanity Marble</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link style={{borderBottom:'none'}}  to='/Mosaic'>Mosaic Marble</Link></NavDropdown.Item>
                                            <NavDropdown.Item ><Link style={{borderBottom:'none'}}  to='/Starp'>Stairs Marble</Link></NavDropdown.Item>
                                            <NavDropdown.Divider />
                                        </NavDropdown>
                                    </Nav>

                                </Navbar.Collapse>
                                <button className="get-started-btn ml-auto "><a className="text-decoration-none text-white" href="">Get Started</a></button>
                            </Navbar>

                        </div>

                    </header>
                    {/*End Header*/}
                    <Switch>
                        <Route path="/Home">
                            <Home/>
                        </Route>
                        <Route path="/Contact">
                            <Contact/>
                        </Route>
                        <Route path="/About">
                            <About/>
                        </Route>
                        <Route exact path="/admin">
                            <AdminPannal/>
                        </Route>
                        <Route exact path="/Portfolio">
                            <Portfolio/>
                        </Route>
                        <Route exact path="/Vanity">
                            <Vanity/>
                        </Route>
                        <Route exact path="/Mosaic">
                            <Mosaic/>
                        </Route>
                        <Route exact path="/Starp">
                            <Starp/>
                        </Route>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>

            </div>

        );
    }
}

export default App;
