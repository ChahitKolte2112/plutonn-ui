import React from "react";
import "./LeftSection.css";
import Card from "../../UI/Card";
import Profile from "./Profile";
import FollowList from "./FollowList";
import Data from "../../assets/dummyData";
const LeftSection = () => {
    console.log(Data.profileData);
    return (
        <div className="leftsection">
            <Card className="profile">
                <Profile />
            </Card>
            <Card className="navboard">
                <li className="nav_list">
                    <i class="ri-home-fill">
                        <span className="title">Home</span>
                    </i>
                </li>
                <li className="nav_list">
                    <i class="ri-group-line">
                        {" "}
                        <span className="title">Community</span>
                    </i>
                </li>
                <li className="nav_list">
                    <i class="ri-search-line">
                        <span className="title">Search</span>
                    </i>
                </li>
                <li className="nav_list">
                    <i class="ri-slideshow-2-fill">
                        <span className="title">Course</span>
                    </i>
                </li>
            </Card>
            <Card className="followsection">
                {Data.profileData.map((profile) => (
                    <div key={profile.id} style={{ marginTop: "1rem" }}>
                        <FollowList
                            TypeofButton={"Follow"}
                            middle={false}
                            name={profile.name}
                            address={profile.address}
                            imgurl={profile.imageurl}
                        />
                    </div>
                ))}
            </Card>
        </div>
    );
};

export default LeftSection;
