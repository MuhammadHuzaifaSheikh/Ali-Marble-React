import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class AdminStarp extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Stairs" collections='starp' imageType={9/16} />
            </div>

        );
    }
}

export default AdminStarp;