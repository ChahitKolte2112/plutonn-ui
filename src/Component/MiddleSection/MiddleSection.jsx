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
import postimage2 from "../../assets/postimage2.jpg";
import postimage3 from "../../assets/postimage3.png";
const str = `🌟 Greetings, Members! 
🌟 🔥Introducing our very first

challenge! 🔥 Submit your incredible code for this
mind-boggling problem and get ready for a chance to be
featured with a shoutout on CipherSchools' Instagram page!

📸🎉 👉🏼 Q: Given a binary tree, write an efficient algorithm
to convert the binary tree into its mirror.
`;
const str1 = `Hello everyone! 

We're excited to share our first post in the community. Learning DSA with Java can be challenging, and finding a good resource can be another hurdle. That's why CipherSchools has developed a free certification course called "Data Structures & Algorithms using Java" by CipherSchools themselves.

This course has already attracted over 110+ enrollments and boasts a 40% completion rate. If you're interested, you can access the course through the following link:

🔗 Course Link:
Join CipherSchools and enroll in this course to earn your certificate. Happy learning! 🌟📚✨`;
const str2 = `🌟 Welcome to the DSA community! 🤝📚💻 We're here to learn, grow, and conquer coding challenges together.
Ask questions, explore resources, and connect with like-minded individuals. 
Let's embark on this incredible journey! 🚀💪😊`;
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
            <FollowList
                TypeofButton={"Join"}
                middle={true}
                heading={true}
                imgurl={
                    "https://d3gmywgj71m21w.cloudfront.net/3b2976ba93bbe9d96b4ed00a4966bd87"
                }
                imgsize={"60px"}
            />
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
                    type={"Join DSA COMMUNITY"}
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
                    scroll :"smooth",
                }}
            >
                <PostSection str={str} image={postimage2} />
                <PostSection str={str1} image={postimage3} />
                <PostSection str={str2} />
                <PostSection str={str} image={postimage2} />
            </div>
        </div>
    );
};

export default MiddleSection;
