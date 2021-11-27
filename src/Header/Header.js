import { StorefrontOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlagIcon from "@mui/icons-material/Flag";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import React from "react";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon></SearchIcon>
          <input type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__middle__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__middle__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__middle__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__middle__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__middle__option">
          <StorefrontIcon fontSize="large" />
        </div>

        <div className="header__middle__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__info">
          <Avatar />
          <h4>aarwalka</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
