import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./protfolio.css";
import './Config'

import firebase from "firebase";

const images = [

];


var db = firebase.firestore();


class Mosaic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            imageData:[],

        };
        // load Images
        db.collection("mosaic")
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
                <br/>
                <br/>
                <br/>
                <br/>
                <MDBContainer>
                    <div className="mdb-lightbox no-margin">
                        <br/>
                        <br/>
                        <h1>Mosaic Marble</h1>
                        <MDBRow>

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
            </div>
        );
    }
}

export default Mosaic;