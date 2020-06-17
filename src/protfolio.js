import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./protfolio.css";
import './Config'
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
import Footer from "./footer";
import firebase from "firebase";

const images = [

];


var db = firebase.firestore();


class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            imageData:[],

        };
        // load Images
        db.collection("home")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("New city: ", change.doc.data());
                        let data = change.doc.data();
                        data.id = change.doc.id;
                        let local=this.state.imageData
                        local.push(data);
                        images.push(data.imageUrl)
                        this.setState({imageData: local});
                        console.log(images);

                    }
                    if (change.type === "modified") {
                        console.log("Modified city: ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        console.log("Removed city: ", change.doc.data());
                        let local =this.state.imageData;


                        local.forEach((v, i) => {
                            if (v.id === change.doc.id) {
                                local.splice(i, 1);
                            }
                        });

                        this.setState({imageData: local});


                    }
                });
            });


    }


    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div>
            <MDBContainer>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="mdb-lightbox no-margin">
                    <MDBRow>
                        <br/>
                        <br/>
                        <h1>Portfolio</h1>
                        {   this.state.imageData.map((item, index) => (
                            <MDBCol md="4">
                                <figure>
                                    <img
                                        src={item.imageUrl}
                                        alt="Gallery"
                                        className="img-fluid"
                                        onClick={() =>
                                            this.setState({ photoIndex: 0, isOpen: true })
                                        }
                                    />
                                </figure>
                            </MDBCol>
                        ))}


                    </MDBRow>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </MDBContainer>
            <Footer/>

            </div>
        );
    }
}

export default Portfolio;