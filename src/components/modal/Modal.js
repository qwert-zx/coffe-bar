import React from "react";
import "./modal.css"


function Modal ({active, setActive, children}) {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={elem => elem.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};


export default Modal;