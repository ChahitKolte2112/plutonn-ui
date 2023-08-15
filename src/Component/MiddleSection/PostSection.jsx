import React from "react";
import FollowList from "../LeftSection/FollowList";
import TextArea from "./TextArea";
import MiddleImage from "./MiddleImage";
import PartionLine from "../../UI/PartionLine";
import CommentSection from "./CommentSection";
import PropTypes from "prop-types";
const PostSection = ({ str, image }) => {
    return (
        <div
            style={{
                width: "100%",

                marginBottom: "10px",

                cursor: "pointer",
                boxSizing: "border-box",
            }}
        >
            <FollowList
                middle={true}
                TypeofButton={"Follow"}
                imgurl={
                    "https://d3gmywgj71m21w.cloudfront.net/6246d136788ca0e1226cb06335fb77bd.jpg"
                }
                name={"Nitesh Kumar"}
                address={" @i_m_nitesh9"}
            />
            <TextArea str={str} />
            {image && <MiddleImage image={image} />}

            <CommentSection />

            <PartionLine />
        </div>
    );
};
PostSection.propTypes = {
    image: PropTypes.string,
    str: PropTypes.string.isRequired,
};

PostSection.defaultProps = {
    image: "",
    str: "Waiting for the Content",
};
export default PostSection;
