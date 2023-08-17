import React, { useContext, useState } from "react";
import ProfileIcon from "../ProfileIcon";
import "./CommentSection.css";
import { Tooltip } from "react-tooltip";
import Chahit from "../../assets/Chahit.jpg";
import profileiconimage from "../../assets/profileiconimage.jpeg";
import profileuser from "../../assets/profileuser.png";
import Card from "../../UI/Card";
// import sendicon from "../../assests/sendicon.svg";
import "react-tooltip/dist/react-tooltip.css";
import ThemeContext from "../store/theme-context";
const CommentSection = () => {
    const ctx = useContext(ThemeContext);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState(false);

    const handleLikeClick = () => {};

    const handleCommentClick = () => {
        setComments((prev) => {
            return !prev;
        });
    };

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
                        <i
                            class="ri-chat-3-line"
                            style={{
                                color: `${ctx.isDark ? "white" : "black"}`,
                                fontSize: "24px",
                            }}
                        ></i>
                    </button>
                    <button
                        className="reaction-button"
                        onClick={handleLikeClick}
                    >
                        <i
                            class="ri-thumb-up-fill"
                            style={{
                                color: `${ctx.isDark ? "white" : "black"}`,
                                fontSize: "24px",
                            }}
                        ></i>
                    </button>
                    <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-delay-hide={500}
                    >
                        <i
                            class="ri-share-fill"
                            style={{
                                color: `${ctx.isDark ? "white" : "black"}`,
                                fontSize: "24px",
                            }}
                        ></i>
                    </a>
                    <Tooltip
                        id="my-tooltip"
                        style={{
                            background: "white",
                            paddingRight: "40px",
                            paddingLeft: "0px",

                            borderRadius: "10px",
                        }}
                    >
                        <ul style={{ listStyleType: "none" }}>
                            <li className="reaction-bar">
                                <i
                                    class="ri-whatsapp-fill"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                >
                                    <href rel="">Whatsapp</href>
                                </i>
                            </li>
                            <li className="reaction-bar">
                                <i
                                    class="ri-facebook-fill"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                >
                                    <href>Facebook</href>
                                </i>
                            </li>
                            <li className="reaction-bar">
                                <i
                                    class="ri-instagram-fill"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                >
                                    {" "}
                                    <href>Instagram</href>
                                </i>
                            </li>
                            <li className="reaction-bar">
                                <i
                                    class="ri-twitter-fill"
                                    style={{
                                        fontSize: "20px",
                                    }}
                                >
                                    <href>Twitter</href>
                                </i>
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
                            <i
                                class="ri-telegram-line"
                                style={{
                                    color: `${ctx.isDark ? "white" : "black"}`,
                                    fontSize: "30px",
                                }}
                            ></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommentSection;
