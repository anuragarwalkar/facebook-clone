import ChatIcon from "@mui/icons-material/Chat";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import React from "react";
import "./sidebar.scss";
import SidebarRow from "./SidebarRow/SidebarRow";

const myImg =
  "https://lh3.googleusercontent.com/ogw/ADea4I7ejJyjfu3ZDdmJvPP1sF20FtbtvpLb_d23s55S72U=s83-c-mo";

function sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src={myImg} title="Anurag Arwalkar" />
      <SidebarRow
        title="COVID-19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Marketplace" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default sidebar;
