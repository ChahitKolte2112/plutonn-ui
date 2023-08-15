import React from "react";
import PropTypes from "prop-types";
const PosterDetails = ({ name, date, address, middle }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <div style={{ display: "flex" }}>
                <span style={{ color: "grey", fontSize: "12px" }}>
                    {address}
                </span>
                {middle ? (
                    <span
                        style={{
                            color: "red",
                            paddingLeft: "6px",
                            fontSize: "14px",
                        }}
                    >
                        {date}
                    </span>
                ) : (
                    <span></span>
                )}
            </div>
            <h4 style={{ margin: "0px" }}>{name}</h4>
        </div>
    );
};
PosterDetails.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string,
    address: PropTypes.string.isRequired,
    middle: PropTypes.boolean,
};

PosterDetails.defaultProps = {
    name: "",
    address: "",
    middle: false,
};
export default PosterDetails;
