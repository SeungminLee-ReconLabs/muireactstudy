// in src/AllCustomLayout.js
import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  // AppBar,
  Menu,
  Notification,
  Sidebar,
  setSidebarVisibility,
  ComponentPropType,
} from "react-admin";
// import AppBar from "./CustomReactAdmin/AppBar"
import CustomMenu from "./CustomMenu";
import { sideBarWidth } from "./cssVariables";
import { CssBaseline } from "@material-ui/core";
import CustomAppBar from "./CustomAppBar";
import CustomSideBar from "./CustomSideBar";

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
    overflow: 'auto',
  },
  // appBar의 CSS설정은 CustomAppBar.js 함.
  // appBar: { 
  // },
}));

const AllCustomLayout = ({ children, dashboard, logout, title }) => {
  const classes = useStyles();
  return (

    <CssBaseline>
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <CustomAppBar
          title={title}
          open={false}
          //   open={open}
          logout={logout}
          className={classes.appBar}
          />
        <main className={classes.contentWithSidebar}>
          {/* SideBar */}
          <CustomSideBar>
            {/* <Menu logout={logout} hasDashboard={!!dashboard} /> */}
            {/* SideBar내부 메뉴Navigator */}
            <CustomMenu />
          </CustomSideBar>

          {/* UI상 메인컨텐츠 담기는 부분 */}
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
