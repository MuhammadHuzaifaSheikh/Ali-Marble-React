import React, {Component} from "react";
import storage from "./Config";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import "./protfolio.css";
import Check from "./check";
import './Config'
import firebase from "firebase";

var db = firebase.firestore();
var storageRef = storage.ref();

class AdminHome extends Component {
    state = {
        image: null,
        progress: 0,
        photoIndex: 0,
        isOpen: false,
        imageData: [],
    };


    constructor(props) {
        super(props);
        console.log('load Images');
        // load Images

    }

    componentDidMount() {
        db.collection("home").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    let data = change.doc.data();
                    data.id = change.doc.id;
                    let local = this.state.imageData
                    local.push(data);
                    this.setState({imageData: local});

                }
                if (change.type === "modified") {
                    console.log("Modified city: ", change.doc.data());
                }
                if (change.type === "removed") {
                    console.log("Removed city: ", change.doc.data());
                    let local = this.state.imageData;


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

    handleUpload = () => {

        const {image} = this.state;

        var uploadTask = storage.ref().child(`home/${this.state.blobs.name}`).put(this.state.blobs);

        uploadTask.on('state_changed', (snapshot) => {
            //Progress
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            this.setState({progress: progress + '%'});
            //Progress

            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    alert('Upload is paused')
                    break;

                case firebase.storage.TaskState.RUNNING:
                    console.log('Upload is running');
                    break;
            }
        }, (error) => {
        }, () => {
            //getUrl
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                //getUrl
                //add images
                alert('1');
                this.setState({onViwe: true})

                this.setState({url: downloadURL})
                db.collection("home").add({
                    imageUrl: this.state.url,
                    imageName: `home/${this.state.blobs.name}`,
                }).then(() => {
                })
                //add images


            });


        });


    }


    blob = (e) => {
        this.setState({blobs: e})
    }
    deleteImages = (item) => {
        console.log(item.id);
        db.collection("home").doc(item.id).delete().then(() => {
        })
        let desertRef = storageRef.child(item.imageName);

        desertRef.delete().then(() => {
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });

    }


    render() {
        const {photoIndex, isOpen} = this.state;

        return (

            <div className="center">
                <br/>
                <h2 className="green-text"> Image Uploader</h2>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <div className="file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <Check onViwe={this.state.onViwe} imageType={2 / 2} blob={this.blob}/>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: this.state.progress}}
                             aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">{this.state.progress}</div>
                    </div>
                </div>
                <button

                    onClick={this.handleUpload}
                    className="waves-effect waves-light btn btn-dark"
                >
                    Upload
                </button>
                <br/>
                <br/>
                <MDBContainer>
                    <div className="mdb-lightbox no-margin">
                        <MDBRow>

                            {

                                this.state.imageData.map((item, index) => (
                                    <MDBCol md="4" key={index}>
                                        <figure>
                                            <button onClick={() => this.deleteImages(item)}>Delete</button>
                                            <img
                                                src={item.imageUrl}
                                                alt="Gallery"
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                onClick={() =>

                                                    this.setState({photoIndex: 0, isOpen: true})
                                                }
                                            />
                                        </figure>
                                    </MDBCol>
                                ))}


                        </MDBRow>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default AdminHome;