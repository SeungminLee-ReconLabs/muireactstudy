// in src/AllCustomLayout.js
import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Menu,
  Notification,
  Sidebar,
  setSidebarVisibility,
  ComponentPropType,
} from "react-admin";
import CustomMenu from "./CustomMenu";
import { sideBarWidth } from "./cssVariables";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    zIndex: 1,
    minHeight: "100vh",
    position: "relative",
    boxSizing: "border-box",
  },
  appFrame: {
    display: "flex",
    flexDirection: "column",
    overflowX: "auto",
    // marginTop:'150px',
    // paddingTop: "150px",
    // border: "2px solid red",
    boxSizing: "border-box",
  },
  contentWithSidebar: {
    display: "flex",
    flexGrow: 1,
    // border: "2px solid green",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 2,
    marginTop: "130px",
    marginBottom: "1000px",
    paddingLeft: 5,
  },
  appBar: {
    height: "140px",
    position: "fixed",
    width: `calc(100% - ${sideBarWidth}px)`,
    backgroundColor: '#fafafa',
    boxShadow: '0px 0px '
  },
  sideBar: {
    width: `${sideBarWidth}px`,
    backgroundColor: 'white',
  },
}));

const AllCustomLayout = ({ children, dashboard, logout, title }) => {
  const classes = useStyles();
  return (

    <CssBaseline>
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar
          title={title}
          //   open={open}
          logout={logout}
          className={classes.appBar}
          />
        <main className={classes.contentWithSidebar}>
          <Sidebar
            className={classes.sideBar}  
            >
            {/* <Menu logout={logout} hasDashboard={!!dashboard} /> */}
            <CustomMenu />
          </Sidebar>
          <div className={classes.content}>{children}</div>
        </main>
        <Notification />
      </div>
    </div>
    </CssBaseline>
  );
};

AllCustomLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  dashboard: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // logout: ComponentPropType,
  title: PropTypes.string.isRequired,
};

export default AllCustomLayout;
