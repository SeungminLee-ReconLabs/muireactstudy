// in src/MyAppBar.js
import * as React from "react";
// import { AppBar } from "react-admin";
import { AppBar } from "@material-ui/core";
import { Toolbar, makeStyles, Typography, Avatar } from "@material-ui/core";
import { CssBaseline, useMediaQuery  } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { sideBarWidth } from "./cssVariables";
import { reconlabsMellowWhite} from "./cssVariables"
import PlicARLogo2 from "./svg/PlicARLogo2";
import PlicARLogo2svg from "./svg/PlicARLogo2.svg";
import {reconlabsWhite} from "./cssVariables"

const flexRow = {
  display: 'flex',
  flexDirection: 'row',
}
const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
}

const useStyles =  makeStyles(theme=>({
  appBar: {
    boxSizing: "border-box",
    backgroundColor: reconlabsMellowWhite,
    width: `calc(100% - ${sideBarWidth}px)`,
    marginLeft: sideBarWidth,
    [theme.breakpoints.down('xs')]: {
      // marginLeft: '0px',
      width: '100%'
    },
  },
  toolBar:{
    height: "138px",
    boxSizing: "border-box",
    color: "black",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      // height: "221px",
      // marginBottom: '30px',
      // backgroundColor: reconlabsWhite,
      justifyContent: 'space-evenly',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height: "221px",
      // marginBottom: '30px',
      backgroundColor: reconlabsWhite,
      justifyContent: 'flex-start',
    },
  },
  titleContainer: {
    ...flexColumn,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  profileContainer: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      ...flexRow,
    },
  },
  Avatar: {
    // [theme.breakpoints.down('xs')]: {
      position: 'absolute', 
      transform: "translate(-45px, 0px)"
    // },
  }
}))

const CustomAppBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSMScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isXSScreen = useMediaQuery(theme.breakpoints.down('xs'))
  const titleProps = {
    variant: isSMScreen ? (isXSScreen ? "h6" : "h5" ): "h4",
  }

  const flexRow = {
    display: 'flex',
    flexDirection: 'row',
  }
  const flexColumn = {
    display: 'flex',
    flexDirection: 'column',
  }

  const PlicARLogo = (isXSScreen ? <img style={{marginTop: '38px', marginBottom: '40px'}} src={PlicARLogo2svg}></img> : <></>)

  return (
    <>
      <CssBaseline/>
      <AppBar 
        {...props} // 기본
        className={classes.appBar} // useStyles
        elevation={0} // 그림자효과를 없애기 위함
      >  
        <Toolbar
          {...props}
          className={classes.toolBar}
        >
          <div className={classes.titleContainer}>
            <Typography 
              {...titleProps}
            >
              PlicAR : 쉽고 빠른 AR 커머스
            </Typography>
            <Typography variant="body1">All models</Typography>
          </div>
            {PlicARLogo}
            <div className={classes.profileContainer}>
              <Avatar></Avatar>
              <div>
                <Typography display='block' variant="body2">Name</Typography>
                <Typography display='block' variant="body2">contact@recocnlabs.kr</Typography>
              </div>
            </div>
        </Toolbar>
        
      </AppBar>
    </>
  );
};

/**
 * react admin AppBar아 아닌
 * material ui 의 AppBar를 사용한다.
 * (있어야하는것)
 * 단 이때, react-admin의 Appbar에 있던, 프로필사진(+이름, 이메일)이 있어야한다
 * Avatar 그리고 UserMenu
 * 해당 버튼을 눌렀을 때, logout 메뉴가 뜨는 기능은 있어야한다
 * PlicAR : 쉽고 빠른 AR 커머스 문구
 * 그 아래 All models 문구
 * All models / model detail 로 breadcrump가 되거나, 또는 그냥 텍스트로 처리
 * (없어져야하는 것)
 * 스크롤 내릴 시, appbar 사라지는 문제
 * 
 * 
 * 화면 좁아지면 sidebar 나오는 것 처리. 좁은 화면일때 어케 할건지
 */

export default CustomAppBar;
