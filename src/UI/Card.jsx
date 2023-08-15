import React, { useContext } from "react";

import classes from "./Card.module.css";
import ThemeContext from "../Component/store/theme-context";

const Card = (props) => {
    const ctx= useContext(ThemeContext);

    return (
        <div className={`${classes.card} ${props.className} ${ctx.isDark && classes.dark}`}>
            {props.children}
        </div>
    );
};

export default Card;
