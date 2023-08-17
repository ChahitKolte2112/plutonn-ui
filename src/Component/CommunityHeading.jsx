import React, { useSyncExternalStore } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import ThemeContext from "./store/theme-context";
const CommunityHeading = ({ title, member, fontsize, isDark }) => {
    const ctx = useContext(ThemeContext);
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
                    color: `${ctx.isDark ? "rgb(218, 214, 214)" : "black"}`,
                }}
            >
                {title}
            </h2>

            <h3
                style={{
                    margin: "-0px",
                    color: `${ctx.isDark ? "rgb(218, 214, 214)" : "grey"}`,
                    fontStyle: "normal",
                    fontWeight: 100,
                    fontSize: "16px",
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
