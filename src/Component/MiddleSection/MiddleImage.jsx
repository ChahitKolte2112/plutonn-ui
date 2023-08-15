import React from "react";
import "./MiddleImage.css";

const MiddleImage = ({image}) => {
    return (
        <div className="middle-img">
            <img
                style={{
                    width: "90%",
                    height: "300px",
                    objectFit: "content-fit",
                    borderRadius:"20px",
                    // border:"2px"
                }}
                src={image}
            />
        </div>
    );
};

export default MiddleImage;
