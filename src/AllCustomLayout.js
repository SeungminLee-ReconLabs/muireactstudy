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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    boxSizing: "border-box",
  },
  // appFrame: {
  //   display: "flex",
  //   flexDirection: "column",
  //   overflowX: "auto",
  // },
  contentWithSidebar: {
    display: "flex",
    flexGrow: 1,
    height: '100vh',
    // backgroundColor: 'blue',
  },
  // 메인페이지(컨텐츠)
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 2,
    marginTop: "150px",
    // marginBottom: "1000px",
    paddingLeft: 5,
    overflow: 'visible',
    minHeight: '800px', // 콘텐츠 화면의 최소 사이즈
    [theme.breakpoints.down('xs')]: {
      marginTop: "250px",
      minHeight: "",
      width: "100%", // xs 화면으로 넘어오면, 창 크기에 맞춘다
    }

  },
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
