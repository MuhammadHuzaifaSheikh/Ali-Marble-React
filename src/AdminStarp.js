import React, {Component} from "react";
import storage from "./Config";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Check from "./check";
import './Config'
import firebase from "firebase";

var db = firebase.firestore();
var storageRef = storage.ref();

class AdminStarp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            progress: 0,
            photoIndex: 0,
            isOpen: false,
            imageData:[],
        };
        // load Images
        db.collection("starp")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("New city: ", change.doc.data());
                        let data = change.doc.data();
                        data.id = change.doc.id;
                        let local=this.state.imageData
                        local.push(data);
                        this.setState({imageData: local});
                        console.log(this.state.imageData);

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

    handleUpload = () => {
        const {image} = this.state;

        var uploadTask = storage.ref().child(`starp/${this.state.blobs.name}`).put(this.state.blobs);

        uploadTask.on('state_changed', (snapshot) => {
            //Progress
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({progress:progress+'%'});
            //Progress

            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log('Upload is paused');
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
                this.setState({url: downloadURL})
                db.collection("starp").add({
                    imageUrl: this.state.url,
                    imageName: `starp/${this.state.blobs.name}`,
                }).then(() => {
                    console.log("Document successfully written!");
                })
                //add images


            });


        });
    }


    blob = (e) => {
        this.setState({blobs: e})
    }
    deleteImages=(item)=>{
        console.log(item.id);
        db.collection("starp").doc(item.id).delete().then(()=> {
            console.log("Document successfully deleted!");
        }).catch((error)=> {
            console.error("Error removing document: ", error);
        });

        let desertRef = storageRef.child(item.imageName);

        desertRef.delete().then(()=> {
            console.log("File deleted successfully");
        }).catch((error)=> {
            // Uh-oh, an error occurred!
            console.log(error);
        });

    }


    render(){
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
                        <Check imageType={10/16} blob={this.blob}/>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: this.state.progress}} aria-valuenow="25"
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
                                            <button onClick={()=>this.deleteImages(item)}>Delete</button>
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

export default AdminStarp;