import React from "react";
import "./MiddleSection.css";
import MiddleImage from "./MiddleImage";
import FollowList from "../LeftSection/FollowList";
import PartionLine from "../../UI/PartionLine";
import Button from "../Button";
import TextArea from "./TextArea";
import PostSection from "./PostSection";
import CommentSection from "./CommentSection";
import { useContext } from "react";
import ThemeContext from "../store/theme-context";
const str = `🌟 Greetings, Members! 
🌟 🔥Introducing our very first

challenge! 🔥 Submit your incredible code for this
mind-boggling problem and get ready for a chance to be
featured with a shoutout on CipherSchools' Instagram page!

📸🎉 👉🏼 Q: Given a binary tree, write an efficient algorithm
to convert the binary tree into its mirror.
`;
const MiddleSection = () => {
    function classNames(...args) {
        return args.filter(Boolean).join(" ");
    }
    const ctx = useContext(ThemeContext);
    return (
        <div
            className={classNames(
                "middlesection",
                ctx.isDark && "middlesectiondark"
            )}
        >
            <FollowList TypeofButton={"Join"} middle={true} heading={true} />
            <PartionLine size={"98%"} />
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button type={"Post"} textcolor={"#f45046"} height={"55px"} />
                <Button type={"Announcements"} height={"55px"} w={"48%"} />
            </div>
            <PartionLine size={"98%"} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5px",
                }}
            >
                <Button
                    type={"Join DSA MKC"}
                    textcolor={"white"}
                    backgroundcolor={"#f45046"}
                    w={"85%"}
                    borderradius={"25px"}
                    height={"45px"}
                />
            </div>

            <div
                style={{
                    overflow: "scroll",
                    height: "64%",
                    padding: "10px",
                    marginTop: ".5rem ",
                }}
            >
                <PostSection str={str} />
                <PostSection str={str} />
                <PostSection str={str} />
                <PostSection str={str} />
            </div>
        </div>
    );
};

export default MiddleSection;
