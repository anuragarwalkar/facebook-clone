import React, { Fragment } from "react";
import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widget/Widgets";

function HomeScreen() {
  return (
    <Fragment>
      <Sidebar />
      <Feed />
      <Widgets />
    </Fragment>
  );
}

export default HomeScreen;
