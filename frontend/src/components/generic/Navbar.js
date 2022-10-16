import { NavLink, useNavigate } from "react-router-dom";
import classes from './Navbar.module.css';

function Navbar() {
    let activeStyle = {
        textDecoration: "underline",
      };
    return (
        <div className={classes.navbarContainer}>
            <img className={classes.logo} src={require('../../assets/Logo.png')} />
            <div className={classes.navbar}>
                <NavLink className={classes.navLink} to="/home" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>Home</NavLink>
                <NavLink className={classes.navLink} to="/people" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>People</NavLink>
                <NavLink className={classes.navLink} to="/Matches" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>Matches</NavLink>
            </div>
        </div>
    )
}

export default Navbar;