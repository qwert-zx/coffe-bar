import React, {useState} from "react";
import Nav from "../Nav";
import '../burger/burger.css'


function Burger () {

    const [buregr_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, seIsMenuClicked] = useState(false)

    function updateMenu (){
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden") 
        }
        seIsMenuClicked(!isMenuClicked)
    }  

    return (
        <div className="burger__wrapper">
            <nav className="burger__nav">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={buregr_class}></div>
                    <div className={buregr_class}></div>
                    <div className={buregr_class}></div>
                </div>

            <div className={menu_class}>                       
                <Nav>           
                </Nav>
            </div>
            </nav>
        </div>
    )

}

export default Burger
