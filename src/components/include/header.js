import '../../assets/css/include/header.css';
import Logo from "../../assets/img/logo.png";
import HamburgerMenu from "../../assets/img/Hamburger_Menu.png";
import Gift from "../../assets/img/Gift.png";
import Gamepad from "../../assets/img/Gamepad.png";
import NotebookBookmark from "../../assets/img/Notebook_Bookmark.png";
import User from "../../assets/img/User.png";
import Earth from "../../assets/img/Earth.png";
import MoonStar from "../../assets/img/Moon_Stars.png";
import MenuIcon from "../../assets/img/menu_icon.png"

import GreenButton from './GreenButton';
import WhiteButton from './WhiteButton';

import React, { useState, useEffect, useRef } from "react";

function Header(props) {
  const [isMenu, setIsMenu] = useState(false);

  const showMenu = () => {
    var temp = isMenu;
    temp = !temp;
    setIsMenu(temp);
  }

  return (
    <div className="inside-header">
      <div className='mobile-category-container' style={{display:isMenu ? "block" : "none"}}>
        <div className='mobile-category'>
          Services
        </div>
        <div className='mobile-category'>
          Accounts
        </div>
        <div className='mobile-category'>
          Games
        </div>
        <div className='mobile-category'>
          Gift Codes
        </div>
        <div className='mobile-category'>
          Courses
        </div>
        <div className='mobile-category'>
          Sign In
        </div>
        <div className='mobile-category' style={{border:"none"}}>
          Register
        </div>
      </div>
      <div className="header-content">
        <div className='header-left-container'>
          <img src={Logo} alt="" className="main-logo" />
        </div>
        <div className='header-middle-container'>
          <div className='inner-category'>
            <img src={HamburgerMenu} className='header-category-img' alt='' />
            <p className='small-font header-category-letter'>Services</p>
          </div>
          <div className='inner-category'>
            <img src={User} className='header-category-img' alt='' />
            <p className='small-font header-category-letter'>Accounts</p>
          </div>
          <div className='inner-category'>
            <img src={Gamepad} className='header-category-img' alt='' />
            <p className='small-font header-category-letter'>Games</p>
          </div>
          <div className='inner-category'>
            <img src={Gift} className='header-category-img' alt='' />
            <p className='small-font header-category-letter'>Gift Codes</p>
          </div>
          <div className='inner-category'>
            <img src={NotebookBookmark} className='header-category-img' alt='' />
            <p className='small-font header-category-letter'>Courses</p>
          </div>
          
        </div>
        <div className='header-right-container'>
          <div className='page-option-container'>
            <img src={Earth} alt='' className='option-img' />
            <img src={MoonStar} alt='' className='option-img'  style={{marginLeft:"20px"}} />
          </div>
          <div className='header-user-container'>
            <div className="header-btn" >
              <WhiteButton name="Sign in"/>
            </div>
            <div className="header-btn" >
              <GreenButton name="register"/>
            </div>
          </div>
          <div className='mobile-icon'>
            <img src={MenuIcon} alt='' className='mobile-icon-img' onClick={showMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;