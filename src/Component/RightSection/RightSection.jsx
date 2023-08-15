import React from "react";
import "./RightSection.css";
import { useState } from "react";
import "../../Component/MiddleSection/CommentSection.css";
import FollowList from "../LeftSection/FollowList";
const RightSection = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="rightsection">
            <div
                style={{
                    display: "flex",
                    width: "95%",
                    border: "2px solid grey",
                    borderRadius: "25px",
                    overflow: "hidden",
                    marginLeft: ".3rem",
                    marginBottom: ".5rem",
                    marginTop: ".5rem",
                    paddingLeft: "20px",
                    paddingBottom: "2px",
                    paddingTop: "2   px",
                }}
            >
                <input
                    style={{
                        width: "90%",
                        border: " 0px white",
                        outline: "none",
                    }}
                    type="text"
                    placeholder="Search Joined Community"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="post-comment-button">
                    <i class="ri-search-line"></i>
                </button>
            </div>
            <h3>
                Popular Community
            </h3>
            <div style={{marginTop:"2em"}}>
            <FollowList
                heading={true}
                TypeofButton={"JOIN"}
                headingtextsize={"12px"}
            /></div>
            <div style={{marginTop:"2em"}}>
            <FollowList
                heading={true}
                TypeofButton={"JOIN"}
                headingtextsize={"12px"}
            /></div>
            <div style={{marginTop:"2em"}}>
            <FollowList
                heading={true}
                TypeofButton={"JOIN"}
                headingtextsize={"12px"}
            /></div>
        </div>
    );
};

export default RightSection;
