import React ,{ useState } from "react";
import themeLogo from '../assets/img/theme-logo.png'
import { header } from "./css/header";
import Dropdown from "./Dropdown";

function Header(){

    const [show,setShow] = useState(false);
    return (
        <div className={header.container}>
            <img src={themeLogo} className="w-24" />

            <div className={header.search} >
                <i >Q</i>
                <input type="text" className={header.input} placeholder="search product" />
            </div>
            <div className="flex justify-between w-80">
                <button onClick={()=>setShow(!show)} className={`${header.dropdown} relative`} ><i className="fa fa-flag"></i>English
                <span> V</span> {show && <Dropdown />} </button>
                <p className={header.dropdown}><i className="fa fa-heart"></i>Favorite</p>
                <p className={header.dropdown}><i className="fa fa-user"></i>Account</p>
            </div>
            
        </div>
    )
}

export default Header