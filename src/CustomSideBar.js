import { Sidebar, Layout } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { reconlabsWhite } from "./cssVariables"

const useStyles = makeStyles(theme => ({
  root: {
    // 특정 사이즈 이하로 작아지면, sidebar를 지웁니다.
    // * works
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    backgroundColor: reconlabsWhite,
  },
  drawerPaper: {
    /* 메인 콘텐츠와의 위치를 잡아주기 위한 DIV */
    width: '300px',
    [theme.breakpoints.down('sm')]: {
      width: '230px'
    }
  },
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
/**
 * 화면크기 작아질때 지멋대로 생기는 못된 애니메이션 제거하기
 * 화면크기 작아지면, 지멋대로 레이아웃 바뀌는데, 그거에 맞춰서 drawer 버튼 좌측 위에 생기도록.
 * 비로소 못된 애니메이션 들어가도 ㄱㅊ
 */

export default CustomSideBar;
