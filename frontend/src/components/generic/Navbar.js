import { NavLink } from "react-router-dom";
import DarkButton from "./DarkButton";
import classes from './Navbar.module.css';
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/userAuthContext";


function Navbar() {
    let activeStyle = {
        textDecoration: "underline",
      };
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
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
            <div>
                <DarkButton btnText='Logout' onClick={handleLogout}/>
            </div>
        </div>
    )
}

export default Navbar;