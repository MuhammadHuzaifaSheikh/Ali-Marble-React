import React, {Component} from "react";
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
import {Link} from "react-router-dom";
import './Config'
import firebase from "firebase";

var db = firebase.firestore();
class Contact extends Component{


    state={
    };

    constructor(props) {
        super(props);
    }



    onValue = (n) => {
        console.log(this.props);

        console.log(n.target.name);
        this.setState({[n.target.name]: n.target.value})
    };

    saveData = () => {
        console.log('Run');
        // console.log(this.props.history);


        if (this.state.Name===""||this.state.FatherName===""||this.state.Email===""){
            alert('Please fill out form correctly')
        }

        db.collection("message").add({
            userName: this.state.Name,
            fatherName: this.state.FatherName,
            email: this.state.Email,
        }).then(()=> {
            console.log("Document successfully written!");
            this.setState({Name: "",FatherName:"",Email:""})

        });





    };


    render() {
        return(
            <div>
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
                                <iframe style={{border:"0", "width": "100%", height: "270px;"}}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.7215219180935!2d67.01554763650695!3d24.898986568536632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc95fe7c94f%3A0xdf9ac31ddb14812b!2sAli%20Marble!5e0!3m2!1sen!2s!4v1590487386972!5m2!1sen!2s"
                                        ></iframe>
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

                                        <div className="form-row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" name="name" className="form-control" id="name"
                                                       placeholder="Your Name" data-rule="minlen:4"
                                                       data-msg="Please enter at least 4 chars"
                                                       onChange={this.onValue}
                                                />

                                                <div className="validate"></div>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" name="email" id="email"
                                                       placeholder="Your Email" data-rule="email"
                                                       data-msg="Please enter a valid email"
                                                       onChange={this.onValue}

                                                />
                                                <div className="validate"></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" id="subject"
                                                   placeholder="Subject" data-rule="minlen:4"
                                                   data-msg="Please enter at least 8 chars of subject"
                                                   onChange={this.onValue}

                                            />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows="5"
                                                      data-rule="required" data-msg="Please write something for us"
                                                      placeholder="Message"
                                                      onChange={this.onValue}

                                            ></textarea>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center">
                                            <button className='btn btn-dark' type="submit">Send Message</button>
                                        </div>


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