import { Sidebar, Layout } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   drawer: {
//     // position: 'relative',
//     top: '0px',
//     backgroundColor: 'black',
//     width: '300px',
//   },
//   drawerPaper: {
//     backgroundColor: "grey",
//     width: '300px'
//   },
// });

const useStyles = makeStyles(theme => ({
  root: {
    // 특정 사이즈 이하로 작아지면, sidebar를 지웁니다.
    // * works
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  drawer: {
    // position: 'relative',
    top: '0px',
    backgroundColor: 'black',
    width: '300px',
  },
  drawerPaper: {
    backgroundColor: "blue",
    width: '300px'
  },
}));

const CustomSideBar = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>
    <Sidebar
      // anchor='right'
      open={true}
      variant="permanent" 
      classes = {{
        // paperAnchorLeft: classes.drawerPaper
        paper: classes.drawerPaper
      }}
      className={classes.drawer} 
      // classes={classes} 
      closedSize={0}
      {...props} 
    />
  </div>
  ;
};
/**
 * 화면크기 작아질때 지멋대로 생기는 못된 애니메이션 제거하기
 * 화면크기 작아지면, 지멋대로 레이아웃 바뀌는데, 그거에 맞춰서 drawer 버튼 좌측 위에 생기도록.
 * 비로소 못된 애니메이션 들어가도 ㄱㅊ
 */
{/* <Drawer
  className={classes.drawer}
  variant="permanent"
  classes={{
    paper: classes.drawerPaper,
  }}
  anchor="left"
>
  <div></div>
  <Divider />
  <List>
    {[1,2,3].map((text, index)=>(
      <ListItem button key={text} >
        <ListItemIcon></ListItemIcon> 
        <ListITemText primary={text} />
      </ListItem>
    ))}
  </List>

</Drawer> */}


export default CustomSideBar;
