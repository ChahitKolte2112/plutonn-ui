import React from "react";
import PropTypes from "prop-types";
const PartionLine = ({ size, color }) => {
    return (
        <hr
            style={{
                width: size,
                borderTop: "1.3px solid",
                margin: "0px",
                borderTopColor: color,
            }}
        />
    );
};
PartionLine.propTypes = {
    size: PropTypes.string.isRequired,
    grey: PropTypes.string,
};
PartionLine.defaultProps = {
    size: "100%",
    color: "grey",
};

export default PartionLine;
