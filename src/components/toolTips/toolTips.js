import React from "react";


const ToolTips = ({active, setActive, children}) => {
    return (
        <div className={active ? "tooltip active" : "tooltip"} onMouseOut={() => setActive(false)}>
            <div className="toolTip" onClick={elem => elem.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};


export default ToolTips;