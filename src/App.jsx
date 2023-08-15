import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import LeftSection from "./Component/LeftSection/LeftSection";
import RightSection from "./Component/RightSection/RightSection";
import MiddleSection from "./Component/MiddleSection/MiddleSection";
import PartionLine from "./UI/PartionLine";
import ThemeContext from "./Component/store/theme-context";
const App = () => {
    const [isDark, setIsdark] = useState(false);
    const onsetDark = () => {
        setIsdark((prev) => !prev);
    };
    function classNames(...args) {
        return args.filter(Boolean).join(" ");
    }
    return (
        <>
            <ThemeContext.Provider
                value={{
                    isDark: isDark,
                    onDark: onsetDark,
                }}
            >
                <div
                    className={classNames(
                        "parent_div",
                        isDark && "parentdark_div"
                    )}
                    style={{overflow:"hidden"}}
                >
                    <Header />
                    <PartionLine />

                    <div className="section_div">
                        <div className="leftsection" >
                            <LeftSection />
                        </div>
                        <article className="middlesection">
                            <MiddleSection />
                        </article>
                        <div className="rightsection">
                            <RightSection />
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
