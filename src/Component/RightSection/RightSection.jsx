import React, { useContext } from "react";
import "./RightSection.css";
import { useState } from "react";
import "../../Component/MiddleSection/CommentSection.css";
import FollowList from "../LeftSection/FollowList";
import ThemeContext from "../store/theme-context";
import Data from "../../assets/dummyCommunity";
const RightSection = () => {
    const [searchText, setSearchText] = useState("");
    const ctx = useContext(ThemeContext);

    return (
        <div className="rightsection">
            <div
                style={{
                    display: "flex",
                    width: "95%",
                    border: "0.5px solid grey",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginLeft: ".3rem",
                    marginBottom: ".5rem",
                    marginTop: ".5rem",
                }}
            >
                <input
                    style={{
                        width: "90%",
                        border: " 0px white",
                        outline: "none",
                        backgroundColor: `${ctx?.isDark ? "transparent" : ""}`,
                        color: `${ctx?.isDark ? "rgb(218, 214, 214)" : ""}`,
                    }}
                    className="search-input"
                    type="text"
                    placeholder="Search Joined Community"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="post-comment-button">
                    <i
                        class="ri-search-line"
                        style={{ color: "#f45046", fontSize: "25px" }}
                    ></i>
                </button>
            </div>
            <h3
                style={{
                    color: `${ctx.isDark ? "rgb(218, 214, 214)" : "black"}`,
                }}
            >
                Popular Community
            </h3>
            {Data.communityData.map((data) => (
                <div style={{ marginTop: "1em" }}>
                    <FollowList
                        heading={true}
                        TypeofButton={"JOIN"}
                        headingtextsize={"12px"}
                        member={data.members}
                        title={data.name}
                        imgurl={data.imageurl}
                    />
                </div>
            ))}
        </div>
    );
};

export default RightSection;
