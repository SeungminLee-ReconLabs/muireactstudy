// in src/CustomMenu.js
import * as React from 'react';
import { Button, DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import PageviewIcon from '@material-ui/icons/Pageview';
import PlicARLogo2 from './svg/PlicARLogo2';
import { makeStyles } from "@material-ui/core/styles";
import {withRouter} from "react-router-dom"
import UploadIcon from '@mui/icons-material/Upload';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Typography, Avatar, Container } from "@material-ui/core";
import { reconlabsWhite} from './cssVariables'

import {
  MenuItem,
  MenuItemProps,
  ListItemIcon,
  Tooltip,
  TooltipProps,
  useMediaQuery,
  Theme,
} from '@material-ui/core';

const useMenuStyles = makeStyles((theme) => ({
  menu: {
    margin: "0px",
    // * works
    // '&:hover': {
    //   backgroundColor: 'black',
    // },
  },
  // * works and required
  closed: {
    width: '300px'
  },
  open: {
    width: '300px'
  },
  MenuItemLink: {
    /* Typography/Body 1 */
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "150%",
    color: "rgba(0, 0, 0, 0.87)",
    width: '268px',
    height: '52px',
    [theme.breakpoints.down('sm')]: {
      height: '40px',
    },
  },
}));





/**
 * TODO: hierarchical Menu Design
 * 아래에 style 넣으면 정상적으로 작동한다
 * 항목들을 배열에 넣고, map 함수를 통해 간단하게 나타낼 수 있다. => drawer 안에 hierachical을 위해선
 * map보다는 하나씩 넣는게 낫다
 * 
 * withRouter, history.push를 통해서 routing을 구현할 수 있다.
 */
const CustomMenu = (props) => {
  const classes = useMenuStyles();
  const {history} = props
  const goUploadPage = () => {
    history.push("/upload")
  }
  const hello=()=>{alert("hello")}
  return (
    <Menu {...props}
      className={classes.menu}
      classes={classes}
    >
      {/* <DashboardMenuItem /> */}
      {PlicARLogo2}
      <div style={{display:'flex', alignItems:'center', flexDirection: 'column' }}>
        <Button onClick={goUploadPage} style={{color: reconlabsWhite, marginBottom:'32px'}} className={classes.MenuItemLink} variant="contained" color="primary" label="새 영상 업로드" children={<UploadIcon/>}></Button>
        <MenuItem onClick={hello} className={classes.MenuItemLink}> <AllInboxIcon style={{color: "rgba(0, 0, 0, 0.54)"}} /> 내 모델 <ExpandLessIcon style={{color: "rgba(0, 0, 0, 0.54)", position:'relative', right:'-140px'}}/></MenuItem>
        <div>
          <MenuItemLink style={{paddingLeft:'40px'}} className={classes.MenuItemLink} to="/users" primaryText="전체 모델" />
          <MenuItemLink style={{paddingLeft:'40px'}} className={classes.MenuItemLink} to="/users" primaryText="진행 중" />
          <MenuItemLink style={{paddingLeft:'40px'}} className={classes.MenuItemLink} to="/users" primaryText="발행 완료" />
          <MenuItemLink style={{paddingLeft:'40px'}} className={classes.MenuItemLink} to="/users" primaryText="모델 취소" />
        </div>
        <MenuItemLink className={classes.MenuItemLink} to="/posts" primaryText="영상 촬영 팁" leftIcon={<VideoCameraFrontIcon />}/>
        <MenuItemLink className={classes.MenuItemLink} to="/modeling" primaryText="구독 플랜" leftIcon={<MonetizationOnIcon />}/>
        <MenuItemLink className={classes.MenuItemLink} to="/postprocessing" primaryText="문의하기" leftIcon={<InfoIcon />}/>
      </div>
      <Container>
        <div style={{position: 'absolute', bottom: '1px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '10px'}}>
          <Avatar></Avatar>
          <div>
            <Typography display='block' variant="body2">Name</Typography>
            <Typography display='block' variant="body2">contact@recocnlabs.kr</Typography>
          </div>
        </div>
      </Container>
    </Menu>
  )
}

export default  withRouter(CustomMenu)
// export default  CustomMenu