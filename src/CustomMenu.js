// in src/CustomMenu.js
import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import PageviewIcon from '@material-ui/icons/Pageview';
import PlicARLogo2 from './svg/PlicARLogo2';
import { makeStyles } from "@material-ui/core/styles";
import {withRouter} from "react-router-dom"

const useMenuStyles = makeStyles(() => ({
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
    backgroundColor: 'green',
  }
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
  console.log('💛💛💛💛💛', props)
  const hello = () => {
    history.push("/library")
  }
  return (
    <Menu {...props}
      className={classes.menu}
      classes={classes}
    >
      {/* <DashboardMenuItem /> */}
      {PlicARLogo2}
      <button onClick={hello} >helehelhkelkfhlk</button>
      <MenuItemLink to="/users" primaryText="Product management" leftIcon={<PageviewIcon />}/>
      <MenuItemLink style={{marginLeft: '100px'}} to="/library" primaryText="All Products" leftIcon={<PageviewIcon />}/>
      <MenuItemLink to="/posts" primaryText="Videos(보이길원하는이름)" leftIcon={<PageviewIcon />}/>
      <MenuItemLink to="/modeling" primaryText="Modeling" leftIcon={<PageviewIcon />}/>
      <MenuItemLink to="/postprocessing" primaryText="Post processing" leftIcon={<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z" fill="black" fill-opacity="0.87"/></svg>}/>
      <MenuItemLink to="/underreview" primaryText="Under review" leftIcon={<PageviewIcon />}/>
      <MenuItemLink to="/delivered" primaryText="Delivered" leftIcon={<PageviewIcon />}/>
      <MenuItemLink to="/published" primaryText="Published" leftIcon={<PageviewIcon />}/>
    </Menu>
  )
}

export default  withRouter(CustomMenu)
// export default  CustomMenu