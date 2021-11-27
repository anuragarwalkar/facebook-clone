import React, { Fragment } from "react";
import Feed from "../components/Feed/Feed";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widget/Widgets";

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
