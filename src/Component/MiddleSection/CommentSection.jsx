import React, { useState } from "react";
import ProfileIcon from "../ProfileIcon";
import "./CommentSection.css";
import { Tooltip } from "react-tooltip";
import Chahit from "../../assets/Chahit.jpg";
import profileiconimage from "../../assets/profileiconimage.jpeg";
import profileuser from "../../assets/profileuser.png";
import Card from "../../UI/Card";
// import sendicon from "../../assests/sendicon.svg";
import "react-tooltip/dist/react-tooltip.css";
const CommentSection = () => {
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState(false);

    const handleLikeClick = () => {
        // Code to handle liking a post
    };

    const handleCommentClick = () => {
        setComments((prev) => {
            return !prev;
        });
    };

    const handleShareClick = () => {};

    const handlePostComment = () => {
        if (commentText.trim() !== "") {
            setComments([...comments, commentText]);
            setCommentText("");
        }
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="comment-bar">
                    <button
                        className="comment-button"
                        onClick={handleCommentClick}
                    >
                        <i class="ri-chat-3-line"></i>
                    </button>
                    <button
                        className="reaction-button"
                        onClick={handleLikeClick}
                    >
                        <i class="ri-thumb-up-fill"></i>
                    </button>
                    <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-delay-hide={500}
                    >
                        <i class="ri-share-fill"></i>
                    </a>
                    <Tooltip
                        id="my-tooltip"
                        style={{
                            background: "white",
                            paddingRight: "40px",
                            paddingLeft: "0px",
                            // border: "2px solid black",
                            borderRadius: "10px",
                        }}
                    >
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ padding: "7px", color: "black" }}>
                                <href>Whatsapp</href>
                            </li>
                            <li style={{ padding: "7px", color: "black" }}>
                                <href>Facebook</href>
                            </li>
                            <li style={{ padding: "7px", color: "black" }}>
                                <href>Instagram</href>
                            </li>
                            <li style={{ padding: "7px", color: "black" }}>
                                <href>Twitter</href>
                            </li>
                        </ul>
                    </Tooltip>
                </div>
                <div className="profile-icon-container">
                    <ProfileIcon
                        size="30px"
                        bgColor="white"
                        imageUrl={Chahit}
                        altText="Profile Icon"
                    />
                    <ProfileIcon
                        size="30px"
                        bgColor="white"
                        imageUrl={profileiconimage}
                        altText="Profile Icon"
                    />
                </div>
            </div>

            <div className="comments-section"></div>

            {comments && (
                <div className="post-comment">
                    <ProfileIcon
                        size="40px"
                        bgColor="white"
                        imageUrl={!Chahit ? Chahit : profileuser}
                        altText="Profile Icon"
                    />
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
                        }}
                    >
                        <input
                            style={{
                                width: "90%",
                                border: " 0px white",
                                outline: "none",
                            }}
                            type="text"
                            className="comment-input"
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button
                            className="post-comment-button"
                            onClick={handlePostComment}
                        >
                            post
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommentSection;
