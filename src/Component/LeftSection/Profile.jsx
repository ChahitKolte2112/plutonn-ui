import React, { useContext } from "react";
import "./Profile.css";
import profileimg from "../../assets/profileimg.png";
import ThemeContext from "../store/theme-context";

const Profile = () => {
    return (
        <div className="profile">
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-85px",
                }}
            >
                <div className="image">
                    <img
                        className="profile_img"
                        src="https://www.plutonn.com/static/media/Mask.c87a2edc5f7bc40a251cbff35040b1cb.svg"
                    ></img>
                    <img className="profileinner_img" src={profileimg}></img>
                </div>
            </div>
            <div className="description">
                <h2>You Haven't Logged</h2>
                <p style={{ fontSize: "12px", fontWeight: 600 }}>
                    take your username now
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        fontWeight: 200,
                        margin: "20px",
                    }}
                >
                    Click the login button and make yourself a part of this
                    wonderful community.
                </p>
            </div>
            <div className="button">
                <div className="login_button">
                    <i className="ri-login-box-line"></i> <span>Login</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
