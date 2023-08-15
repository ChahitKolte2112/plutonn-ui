import React from "react";
import PropTypes from "prop-types";
const CommunityHeading = ({ title, member, fontsize }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "13px",
                paddingTop: "6px",
                paddingBottom: "6px",
            }}
        >
            <h2
                style={{
                    margin: "-0px",
                    fontSize: fontsize,
                    fontWeight: 550,
                }}
            >
                {title}
            </h2>

            <h3
                style={{
                    margin: "-0px",
                    color: "grey",
                    fontStyle: "normal",
                    fontWeight: 100,
                    fontSize: ".5em",
                }}
            >
                {member} Member
            </h3>
        </div>
    );
};
CommunityHeading.propTypes = {
    title: PropTypes.string.isRequired,
    member: PropTypes.number.isRequired,
    fontsize: PropTypes.string,
};
CommunityHeading.defaultProps = {
    title: "COMMUNITY",
    member: 0,
    fontsize: "16px",
};

export default CommunityHeading;
