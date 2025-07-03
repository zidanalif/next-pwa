"use client";
import Link from "next/link";
import NotificationIcon from "../icons/NotificationIcon";
import SettingIcon from "../icons/SettingIcon";

const Header = () => {
  return (
    <header id="top-navbar" className="top-navbar">
      <div className="container">
        <div className="top-navbar_full">
          <div className="back-btn">
            <Link href="/" data-bs-toggle="offcanvas">
              <SettingIcon />
            </Link>
          </div>
          <div className="top-navbar-title">
            <p>Zoop Store</p>
          </div>
          <div className="skip_btn notification-badge-btn">
            <Link href="/">
              <NotificationIcon />
              <div className="notification-badge"></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-boder"></div>
    </header>
  );
};

export default Header;
