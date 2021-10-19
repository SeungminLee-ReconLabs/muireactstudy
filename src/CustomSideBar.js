import { Sidebar, Layout } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { reconlabsWhite } from "./cssVariables"

const useStyles = makeStyles(theme => ({
  root: {
    // 특정 사이즈 이하로 작아지면, sidebar를 지웁니다.
    zIndex: '2',
    backgroundColor:'peru',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    // backgroundColor: 'red', // CSS 확인용
  }, 
  drawerPaper: {
    /* 메인 콘텐츠와의 위치를 잡아주기 위한 DIV */
    width: '300px',
    [theme.breakpoints.down('sm')]: {
      width: '230px'
    }
  },
  fixed: {
    height: '100vh',
    backgroundColor: reconlabsWhite, // CSS 확인용
  }
}));

const CustomSideBar = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>
    <Sidebar
      className={classes.root}
      open={true}
      variant="permanent" 
      classes={classes}
      {...props} 
    />
  </div>
  ;
};

export default CustomSideBar;
