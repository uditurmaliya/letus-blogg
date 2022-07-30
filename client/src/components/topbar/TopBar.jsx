import React from 'react'
import "./topbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function () {

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/about">ABOUT</Link>
          </li>
          {/* <li className="topListItems">
            <Link className="link" to="/">CONTACT</Link>
          </li> */}
          <li className="topListItems">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/" onClick={handleLogout}>{user && "LOGOUT"}</Link>
          </li>
        </ul>
      </div>

      <div className="topRight">
        {
          user ? (
            <div>
            <Link to="/settings">
              <img
                className="topImg"
                src={PF + user.profilePic}
                alt=""
              />
            <span className="update">Update Profile</span>
            </Link>
            </div>
          ) : (
            <ul className='topList'>
              <li className="topListItems">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItems">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
      </div>
    </div>
  )
}
