import React,{useEffect} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Box, Container, CssBaseline, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: '10px',
    padding: '5px',
    justifyContent:'center',
    // width: '100%'
  },
  cardImagePaper: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    // width: "718px",
    width: "80%",
    maxWidth: '100%',
    height: "375px",
  },
  cardImage: {
    // width: "718px",
    // height: "375px",
  },
  cardDescription: {
    // width: '354px',
    width: '20%',
    maxWidth: '100%',
    height: '375px',
  },
}));

export default function StepPublish() {
  const classes = useStyles();
  // 스크롤 최상단 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (<>
    <CssBaseline />
    <Container maxWidth="lg"  className="StepPublish-container" >
      {/* Web Viewer */}
      <Card className={classes.root} elevation={0}>
        <Paper
          className={classes.cardImagePaper}
        >
          <img src="/images/PlicARLogo.svg" 
            className={classes.cardImage} 
          />
        </Paper>
        <Paper
          className={classes.cardDescription}
        >
          <CardContent>
            <Typography component="h5" variant="h5">
              Web Viewer
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {/* Web Viewer 설명 */}
            </Typography>
          </CardContent>

        </Paper>
      </Card>
      {/* QR */}
      <Card className={classes.root} elevation={0}>
        <Paper
          className={classes.cardImagePaper}
        >
          <img src="/images/PlicARLogo.svg" 
            className={classes.cardImage} 
          />
        </Paper>
        <Paper
          className={classes.cardDescription}
        >
          <CardContent>
            <Typography component="h5" variant="h5">
              QR
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {/* QR 설명 */}
            </Typography>
          </CardContent>
        </Paper>
      </Card>
      {/* AR 제품 보기 버튼 */}
      <Card className={classes.root} elevation={0}>
        <Paper
          className={classes.cardImagePaper}
        >
          <img 
            src="/images/ARProductWatchButton.png"
            style={{transform:'scale(0.5)'}}
          />
        </Paper>
        <Paper
          className={classes.cardDescription}
        >
          <CardContent>
            <Typography component="h5" variant="h5">
              AR 제품 보기 버튼 
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {/* AR 제품 보기 버튼 설명 */}
            </Typography>
          </CardContent>
        </Paper>
      </Card>
    </Container>
  </>
  );
}
