import "./Sidebar.css"
import { IoCartOutline } from "react-icons/io5";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors"
import Gender from "./Gender/Gender";
import logo from "../assets/logo.jpg"

const Sidebar = ({ handleChange }) => {
  return <>
    <section className="sidebar">
        <div className="logo-container">
            <img src={logo} className ="main-logo"/>
        </div>
        <Gender handleChange={handleChange}/>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>

    </section>
  </>
}

export default Sidebar