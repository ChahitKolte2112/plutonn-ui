import React, { useContext } from "react";
import "./FollowList.css";
import profileimg from "../../assets/profileimg.png";
import more_icon from "../../assets/more_icon.png";
import Chahit from "../../assets/Chahit.jpg";
import ProfileIcon from "../ProfileIcon";
import CommunityHeading from "../CommunityHeading";
import PosterDetails from "../PosterDetails";
import ThemeContext from "../store/theme-context";
const FollowList = ({
    TypeofButton,
    middle,
    heading,
    headingtextsize,
    imgsize,
    imgurl,
    name,address,

}) => {
    function classNames(...args) {
        return args.filter(Boolean).join(" ");
    }
    const ctx = useContext(ThemeContext);
    return (
        <div
            className={classNames(
                "follow-list",
                ctx.isDark && "follow-listdark"
            )}
        >
            <div style={{ display: "flex", gap: ".2em" }}>
                <div className="grid-item" style={{marginBottom:"5px"}}>
                    <ProfileIcon
                        size={imgsize ? imgsize : "40px"}
                        bgColor="white"
                        imageUrl={imgurl}
                        altText="Profile Icon"
                    />
                </div>

                {heading ? (
                    <CommunityHeading
                        title={"DEV COMMUNITY"}
                        member={196}
                        fontsize={headingtextsize}
                    />
                ) : (
                    <PosterDetails
                        name={name}
                        address={address}
                        date={"27-jun-23"}
                        middle= {middle}
                    />
                )}
            </div>
            <div
                style={{
                    display: "flex",
                    gap: ".1rem",
                    justifyContent: "end",
                    alignItems: "center",
                    paddingRight: "2rem",
                }}
            >
                <button
                    style={{
                        background: "transparent",
                        border: "0px",
                        padding: ".5px",
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            fontSize: "14px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "1.5rem",
                                paddingRight: ".5rem",
                                color: "red",
                            }}
                        >
                            +
                        </span>
                        {TypeofButton}
                    </span>
                </button>
                {middle && (
                    <img
                        style={{ width: "15px", height: "15px" }}
                        src={more_icon}
                    ></img>
                )}
            </div>
        </div>
    );
};

export default FollowList;
