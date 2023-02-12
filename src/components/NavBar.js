import "./style.css";
import CartWidget  from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
         <div>login</div>
          <div>
            <ul className="options">
                <li>
                    <NavLink 
                    className={({ isActive }) => (isActive ? "active" : "inactive")} 
                    to="/">
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) => (isActive ? "active" : "inactive")} 
                    to="/category/men`clothing">
                        Hombre
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) => (isActive ? "active" : "inactive")} 
                    to="/category/women`clothing">
                        Mujer
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) => (isActive ? "active" : "inactive")} 
                    to="/category/jewelery">
                        Joyeria
                    </NavLink>
                </li>
            </ul>
          </div>
         <div>
            <Link to="/cart">
                <CartWidget />
            </Link>
         </div>
        </div>
    ); 
};

export default NavBar;