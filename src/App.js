import React,{Component} from 'react';
import './App.css';
import Home from "./Components/Nev-Items/Home";
import Contact from "./Components/Nev-Items/Contact";
import About from "./Components/Nev-Items/About";
import Portfolio from "./Components/Nev-Items/protfolio";
import AdminPannal from "./Components/Admin/AdminPannal.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Footer from "./Components/Nev-Items/footer";
import Mosaic from "./Components/Types-Marble/Mosaic";
import Vanity from "./Components/Types-Marble/Vanity";
import Starp from "./Components/Types-Marble/Starp";
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
    NavLink
} from "react-router-dom";

class App extends Component{
    state = {
        isOpen: false
    };


    toggleCollapse =()=>{
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {

        return (
            <div className="App">
                <Router>
                    <header id="header" className="fixed-top header-inner-pages">
                        <div className="container d-flex align-items-center">
                            <Navbar  className="container bg-light mr-auto" expand="lg">
                                <Navbar.Brand></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">

                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <NavLink activeClassName='linkStyle '  to='/home' className="nav-link" >Home
                                                   </NavLink>
                                            </li>
                                            <li className="nav-item active">
                                                <NavLink activeClassName='linkStyle'   to='/about' className="nav-link " href="#">About</NavLink>
                                            </li>
                                            <li className="nav-item active">
                                                <NavLink activeClassName='linkStyle'   to='/contact' className="nav-link" href="#">Contact </NavLink>
                                            </li>
                                        </ul>
                                        {/*<Nav.Link>
                                        {/*<Nav.Link><Link style={{borderBottom:'none'}}  to='/About'>About</Link></Nav.Link>*/}
                                        {/*<Nav.Link><Link style={{borderBottom:'none'}}  to='/Contact'>Contact</Link></Nav.Link>*/}
                                        {/*<Nav.Link><Link style={{borderBottom:'none'}}  to='/Portfolio'>Portfolio</Link></Nav.Link>*/}
                                        <NavDropdown title="Products" id="basic-nav-dropdown">
                                            <ul>
                                            <li className="nav-item dropdown">
                                                <NavLink activeClassName='dropdown'  to='/vanity' className="dropdown-item" href="#">Vanity </NavLink>
                                                <NavLink activeClassName='dropdown'  to='/mosaic' className="dropdown-item" href="#">Mosaic </NavLink>
                                                <NavLink activeClassName='dropdown'  to='/stairs' className="dropdown-item" href="#">Stairs </NavLink>


                                            </li>
                                            </ul>
                                        </NavDropdown>
                                    </Nav>

                                </Navbar.Collapse>
                                <button className="get-started-btn ml-auto "><a className="text-decoration-none text-white" href="">Get Started</a></button>
                            </Navbar>

                        </div>

                    </header>
                    {/*End Header*/}
                    <Switch>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route exact path="/admin">
                            <AdminPannal/>
                        </Route>
                        <Route exact path="/portfolio">
                            <Portfolio/>
                        </Route>
                        <Route exact path="/vanity">
                            <Vanity/>
                        </Route>
                        <Route exact path="/mosaic">
                            <Mosaic/>
                        </Route>
                        <Route exact path="/starp">
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
