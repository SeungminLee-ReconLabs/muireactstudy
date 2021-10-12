// in src/MyAppBar.js
import * as React from "react";
// import { AppBar } from "react-admin";
import { AppBar } from "@material-ui/core";
import { Toolbar, makeStyles, Typography, Avatar } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { sideBarWidth } from "./cssVariables";

const useStyles =  makeStyles({
  appBar: {
    boxSizing: "border-box",
    // backgroundColor: "#fafafa",
    width: `calc(100% - ${sideBarWidth}px)`,
    marginLeft: sideBarWidth,
  },
  toolBar:{
    height: "138px",
    boxSizing: "border-box",
    color: "black",
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: '30px',
  }
})

const CustomAppBar = (props) => {
  const classes = useStyles();
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
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Typography variant="h4">PlicAR : 쉽고 빠른 AR 커머스</Typography>
            <Typography variant="body1">All models</Typography>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
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
