import React from "react";
import "./Button.css";
const Button = ({
    type,
    textcolor,
    backgroundcolor,
    w,
    borderradius,
    height,
}) => {
    return (
        <button
            className="middle-button"
            style={{
                color: textcolor ? textcolor : "black",
                backgroundColor: backgroundcolor,
                width: w,
                borderRadius: borderradius,
                height: height,
            }}
        >
            {type}
        </button>
    );
};

export default Button;
