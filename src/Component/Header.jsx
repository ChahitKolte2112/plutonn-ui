import React from "react";
import { useState, useContext } from "react";
import "./Header.css";
import lightnotification from "../../src/assets/lightnotification.svg";
import coloredsun from "../../src/assets/coloredsun.png";
import night from "../../src/assets/night.png";
import profileuser from "../../src/assets/profileuser.png";
import "../../src/Component/MiddleSection/CommentSection.css";
import ThemeContext from "./store/theme-context";
import lightprofile from "../assets/lightprofile.webp";
const Header = () => {
    function classNames(...args) {
        return args.filter(Boolean).join(" ");
    }
    const ctx = useContext(ThemeContext);
    return (
        <div className={classNames("header", ctx.isDark && "header-dark")}>
            <div
                style={{
                    display: "flex",
                    alignItem: "center",
                    paddingLeft: "2rem",
                }}
            >
                <img
                    style={{ width: "40px", height: "40px" }}
                    src={
                        "data:image/png;base64,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"
                    }
                />
                <h2 style={{ marginTop: "8px", paddingLeft: ".5rem" }}>
                    Plutonn
                </h2>
            </div>
            <div className="header-title">
                <h2>Community-Posts</h2>
            </div>
            <div>
                <div
                    style={{
                        display: "flex",
                        gap: "1.5rem",
                        alignItems: "center",
                    }}
                >
                    <button
                        style={{
                            padding: "0px",
                        }}
                        className={classNames("post-comment-button")}
                    >
                        <i
                            class="ri-notification-2-fill"
                            style={{
                                width: "20px",
                                height: "20px",
                                margin: "5px",
                                color: `${ctx.isDark?"#f2f2ed":"black"}`,
                                
                            }}
                        ></i>
                    </button>

                    <button
                        className="post-comment-button"
                        style={{
                            padding: "0px",
                            backgroundColor: "transparent",
                        }}
                    >
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                                margin: "5px",
                            }}
                            src={ctx.isDark ? coloredsun : night}
                            onClick={ctx.onDark}
                        />
                    </button>

                    <img
                        style={{
                            width: "35px",
                            height: "35px",
                            margin: "0px",
                            borderRadius: "50%",
                            border: "1px solid grey",
                        }}
                        src={ctx.isDark ? lightprofile : profileuser}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
