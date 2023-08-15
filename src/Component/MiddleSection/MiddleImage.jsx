import React from "react";
import "./MiddleImage.css";

const MiddleImage = ({image}) => {
    return (
        <div className="middle-img">
            <img
                style={{
                    width: "90%",
                    height: "300px",
                    object: "content-fit",
                }}
                src={image}
            />
        </div>
    );
};

export default MiddleImage;
