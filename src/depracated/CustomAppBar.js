// in src/MyAppBar.js
import * as React from "react";
import { AppBar } from "react-admin";
import { Toolbar, makeStyles, Typography } from "@material-ui/core";
import { sideBarWidth } from "../cssVariables";

const useStyles =  makeStyles({
  appBar: {
    // boxSizing: "border-box",
    // height: 50,
    // backgroundColor: "#e5e5e5",
    // width: `calc(100% - ${sideBarWidth}px)`,
    // left:`${sideBarWidth}px`
    // marginLeft: sideBarWidth,
  },
  toolBar:{
    // boxSizing: "border-box",
    // height: 50,
    // width: `calc(100vw)`,
  }
})

const CustomAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} className={classes.appBar}>
    </AppBar>
  );
};

export default CustomAppBar;
