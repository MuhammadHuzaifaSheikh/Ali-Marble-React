import React, {Component} from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Config'
import '../../assets/css/style.css';
import '../../assets/img/favicon.png';
import '../../assets/img/apple-touch-icon.png';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/icofont/icofont.min.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/animate.css/animate.min.css';
import '../../assets/vendor/remixicon/remixicon.css';
import '../../assets/vendor/venobox/venobox.css';
import '../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import {Link} from "react-router-dom";

import firebase from "firebase";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

var db = firebase.firestore();

class Contact extends Component {


    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        open:false,
    };

     handleClickOpen = () => {
        this.setState({open:true});
    };

     handleClose = () => {
         this.setState({open:false});
    };


    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    saveData = (e) => {
        e.preventDefault()
        console.log('Run');

        // console.log(this.props.history);



        db.collection("message").add({
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,

        }).then(() => {
            console.log("Document successfully written!");
            this.setState({name: "", subject: "", email: "",message:''})
            this.handleClickOpen()

        });


    };


    render() {

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Message?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Your message is sent
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>






                <main id="main">
                    {/*Breadcrumbs*/}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">

                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Contact</h2>
                                <ol>
                                    <li><Link to="/Home">Home</Link></li>
                                    <li>Contact</li>
                                </ol>
                            </div>

                        </div>
                    </section>
                    {/* End Breadcrumbs*/}

                    {/*Contact Section*/}
                    <section id="contact" className="contact">
                        <div className="container">

                            <div>
                                <iframe style={{border:"0", width: "100%", height: "270px",}}
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                        frameBorder="0" allowFullScreen></iframe>
                            </div>

                            <div className="row mt-5">

                                <div className="col-lg-4">
                                    <div className="info">
                                        <div className="address">
                                            <i className="icofont-google-map"></i>
                                            <h4>Location:</h4>
                                            <p></p>
                                        </div>

                                        <div className="email">
                                            <i className="icofont-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>ali.marble0008@gmail.com</p>
                                        </div>

                                        <div className="phone">
                                            <i className="icofont-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55s</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-8 mt-5 mt-lg-0">
                                    <form onSubmit={this.saveData} className="php-email-form">
                                        <MDBRow>
                                            <MDBCol md="6" className=" form-group">
                                                <MDBInput
                                                    value={this.state.name}
                                                    name="name"
                                                    onChange={this.changeHandler}
                                                    type="text"
                                                    id="materialFormRegisterNameEx"
                                                    label="Your Name"
                                                    className="form-control"
                                                    required
                                                />
                                            </MDBCol>
                                            <MDBCol md="6" className=" form-group">
                                                <MDBInput
                                                    value={this.state.email}
                                                    name="email"
                                                    onChange={this.changeHandler}
                                                    type="email"
                                                    id="materialFormRegisterNameEx"
                                                    label="Your Email"
                                                    className="form-control"
                                                    required
                                                />
                                            </MDBCol>
                                            <MDBCol md="12" className=" form-group">
                                                <MDBInput
                                                    value={this.state.subject}
                                                    name="subject"
                                                    onChange={this.changeHandler}
                                                    type="text"
                                                    id="materialFormRegisterNameEx"
                                                    label="Subject"
                                                    className="form-control"
                                                    required
                                                />
                                            </MDBCol>
                                            <MDBCol md="12" className=" form-group">
                                                <MDBInput
                                                    rows="5"
                                                    value={this.state.message}
                                                    name="message"
                                                    onChange={this.changeHandler}
                                                    type="textarea"
                                                    id="materialFormRegisterNameEx"
                                                    label="message"
                                                    className="form-control"
                                                    required
                                                />
                                            </MDBCol>




                                        </MDBRow>
                                        <MDBRow>



                                        </MDBRow>

                                        <MDBBtn color="success" type="submit">
                                            Submit Form
                                        </MDBBtn>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/*    End Contact Section*/}

                </main>
                {/*End #main*/}
            </div>
        )
    }
}

export default Contact