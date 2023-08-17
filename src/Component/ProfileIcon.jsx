import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./ProfileIcon.css";
import ThemeContext from "./store/theme-context";

const ProfileIcon = ({ size, bgColor, imageUrl, altText }) => {
    const iconStyle = {
        width: size,
        height: size,
        backgroundColor: "white",
    };
    const ctx = useContext(ThemeContext);
    return (
        <div className="profile-icon" style={iconStyle}>
            <img
                style={{
                    width: size,
                    height: size,

                    borderRadius: "50%",
                    margin: "0px",
                    border:"1px solid grey"
                }}
                src={imageUrl}
                alt={altText}
            />
        </div>
    );
};

ProfileIcon.propTypes = {
    size: PropTypes.string,
    bgColor: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};

ProfileIcon.defaultProps = {
    size: "100px",
    bgColor: "white",
};

export default ProfileIcon;
