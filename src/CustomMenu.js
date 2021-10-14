// in src/CustomMenu.js
import React, { useState } from 'react';
import { Button, DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import PageviewIcon from '@material-ui/icons/Pageview';
import PlicARLogo2 from './svg/PlicARLogo2.svg';
import { makeStyles } from "@material-ui/core/styles";
import {withRouter} from "react-router-dom"
import UploadIcon from '@mui/icons-material/Upload';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Avatar, Container, Collapse, IconButton  } from "@material-ui/core";
import { reconlabsWhite} from './cssVariables'
/* className 조작 https://www.npmjs.com/package/clsx */
import clsx from 'clsx'; 

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
    // backgroundColor: 'purple' // CSS 확인용
  },
  /* sidebar 및 메뉴의 width */
  closed: {
    width: '300px',
    [theme.breakpoints.down('sm')]: {
      width: '230px',
    },
  },
  open: {
    width: '300px',
    [theme.breakpoints.down('sm')]: {
      width: '230px',
    },
  },

  /* 내 모델 열고 닫기 */
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandClose: {
    // transform: 'rotate(-180deg)',
    color: "rgba(0, 0, 0, 0.54)", 
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  /*  */
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
      width: '200px',
    },
  },
  icon: { marginRight:'16px'},
}));


/**
 * withRouter, history.push를 통해서 routing을 구현할 수 있다.
 */
const CustomMenu = (props) => {
  const [expanded, setExpanded] = useState(false)
  const classes = useMenuStyles();
  const {history} = props
  const goUploadPage = () => {
    history.push("/upload")
  }
  const expandProductsMenu=()=>{
    setExpanded(!expanded)
  }


  return (
    <Menu {...props}
      className={classes.menu}
      classes={classes}
    >
      {/* <DashboardMenuItem /> */}
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',height: '175px'}} >
        <img style={{width: '158px', height:'67px',}} src={PlicARLogo2}></img>
      </div>
      <div style={{display:'flex', alignItems:'center', flexDirection: 'column' }}>
        <Button onClick={goUploadPage} style={{color: reconlabsWhite, marginBottom:'32px'}} className={classes.MenuItemLink} variant="contained" color="primary" label="새 영상 업로드" children={<UploadIcon/>}></Button>
        <MenuItem onClick={expandProductsMenu} className={classes.MenuItemLink}>
          <AllInboxIcon className={classes.icon} style={{color: "rgba(0, 0, 0, 0.54)"}} /> 
          내 모델 
          <IconButton className={clsx(classes.expandClose, {[classes.expandOpen] : expanded})} >
            <ExpandMoreIcon/>
          </IconButton>
        </MenuItem>
        <div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <MenuItemLink style={{paddingLeft:'40px'}} className={classes.MenuItemLink} to="/products" primaryText="전체 모델" />
          <MenuItemLink style={{paddingLeft:'40px'}} className={classes.MenuItemLink} to='/products?sort=["progress"]' primaryText="진행 중" />
          <MenuItemLink style={{paddingLeft:'40px'}} className={classes.MenuItemLink} to='/products?sort=["published"]' primaryText="발행 완료" />
          <MenuItemLink style={{paddingLeft:'40px'}} className={classes.MenuItemLink} to='/products?sort=["canceled"]' primaryText="모델 취소" />
        </Collapse>
        </div>
        <MenuItemLink className={classes.MenuItemLink} to="/posts" primaryText="영상 촬영 팁" leftIcon={<VideoCameraFrontIcon />}/>
        <MenuItemLink className={classes.MenuItemLink} to="/modeling" primaryText="구독 플랜" leftIcon={<MonetizationOnIcon />}/>
        <MenuItemLink className={classes.MenuItemLink} to="/postprocessing" primaryText="문의하기" leftIcon={<InfoIcon />}/>
      </div>
      <Container>
        <div style={{position: 'absolute', bottom: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '10px'}}>
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