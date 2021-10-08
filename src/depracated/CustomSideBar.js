import { Sidebar, Layout } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  drawer: {
    // position: 'relative',
    top: '0px',
    backgroundColor: 'black',
    width: '300px',
  },
  drawerPaper: {
    backgroundColor: "grey",
  },
});

const CustomSideBar = (props) => {
  const classes = useStyles();
  return <Sidebar className={classes.drawer} classes={classes} {...props} />;
};

export default CustomSideBar;
