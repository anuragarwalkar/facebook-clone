import { Feed, Widgets } from "@mui/icons-material";
import React, { Fragment } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

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
