import * as React from "react";
/* Material-ui version 4 */
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  CardHeader,
  makeStyles,
  Paper,
  IconButton,
  TextField,
  Link,
} from "@material-ui/core";

import {
  Stepper,
  Step,
  StepLabel,
  // makeStyles,
  // Button,
  // Typography,
} from "@material-ui/core";

/* MUI version 5 */
import Pagination from "@mui/material/Pagination";

/* Icons */
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { reconlabsPrimaryYellow, reconlabsWhite } from "../cssVariables";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { fontWeight } from "@mui/system";

const useProductDetailStyle = makeStyles((theme) => ({
  root: {
    marginBottom: "10px",
    // zIndex: '-1',
  },
}));

export default function ProductDetail(props) {
  const classes = useProductDetailStyle();
  console.log(props);
  const theme = useTheme();
  const isSMScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.root}>
        <Paper elevation={0}>
          <Button
            style={{
              width: "145px",
              height: "42px",
              display: "flex",
              gap: "50px",
            }}
          >
            <ArrowBackIcon
              style={{ color: reconlabsPrimaryYellow, marginRight: "6px" }}
            />
            <Typography color="primary" marginLeft="6px">
              뒤로가기
            </Typography>
          </Button>
          <Container style={{ display: "flex", gap: "16px" }}>
            <Button color="primary" variant="contained">
              저장
            </Button>
            <Button color="primary" variant="outlined">
              취소
            </Button>
          </Container>
          <TextField
            required
            id="outlined-required"
            label="Product Name"
            defaultValue="제품 이름"
            variant="outlined"
          />
          <TextField
            multiline
            required
            id="outlined-required"
            label="Product description"
            defaultValue="제품을 모델링할 때 참고할 사항에 대하여 작성해주세요."
            variant="outlined"
          />
          <TextField
            multiline
            required
            id="outlined-required"
            label="Model history"
            defaultValue="제품을 모델링할 때 참고할 사항에 대하여 작성해주세요."
            variant="outlined"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
        </Paper>
      </Container>
      <ProductStep />
    </>
  );
}

const useStepperStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // zIndex: '-1',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function ProductStep() {
  /* 
  TODO) sprint6
  * PLMStep은 fetch product의 Enum status를 통해 결정되도록 코딩
  * PLMStep에 따라 activeStep(고객이 보는 단계)이 결정됨
  */
  const classes = useStepperStyles();
  const PLMStep = 0;
  /*
  0: 영상제출
  1: 영상기각
  => activeStep => 0
  2: 모델링 중
  3: 모델링 실패
  => activeStep => 1
  4: 발행 
  => activeStep => 2
  */




  const [activeStep, setActiveStep] = React.useState(1);
  const steps = ["영상 확인", "모델링 중", "발행"];
  let currentStepComponent = (step) => {
    switch (step) {
      case 0:
        return <StepVideo />;
      case 1:
        return <StepModeling />;
      case 2:
        return <StepPublish />;
    }
  };
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              {" "}
              <Typography variant="subtitle2">{label} </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container maxWidth="xl">{currentStepComponent(activeStep)}</Container>
    </Container>
  );
}






const useVideoStepStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  notice: {
    width: "321px",
    height: "186px",
    backgroundColor: "#4D74FA",
    padding: "16px",
  },
  noticeFail: {
    width: "321px",
    height: "186px",
    padding: "16px",
    backgroundColor: "#F73B11",
  },
  videoImg: {
    width: "716px",
    height: "343px",
    backgroundColor: "black",
  },
  gridCenter: {
    display: "flex",
    justifyContent: "center",
  },
  modelingCancelButton: {
    width: "716px",
    height: "42px",
    marginTop: "15px",
    backgroundColor: "#F73B11",
    color: "white",
  },
  videoGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  videoMetaDataGrid: {
    marginTop: "10px",
    width: "716px",
    display: "flex",
    alignItems: "center",
  },
}));

function StepVideo() {
  let classes = useVideoStepStyles();
  /**
   * 영상검수 성공 실패 여부 fetch 데이터
   */
  // const isVideoConfirmed = true
  const processStep = false;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item key={1} sm={12} md={8} xl={6} className={classes.videoGrid}>
          <img className={classes.videoImg}></img>
          <Grid container className={classes.videoMetaDataGrid}>
            <Grid item key={1} md={4} xs={12}>
              <TextField
                defaultValue="hehe"
                label="용량"
                InputProps={{ readOnly: true }}
              ></TextField>{" "}
            </Grid>
            <Grid item key={2} md={4} xs={12}>
              <TextField
                defaultValue="hehe"
                label="영상 제목"
                InputProps={{ readOnly: true }}
              ></TextField>{" "}
            </Grid>
            <Grid item key={3} md={4} xs={12}>
              <TextField
                defaultValue="hehe"
                label="영상 길이"
                InputProps={{ readOnly: true }}
              ></TextField>{" "}
            </Grid>
          </Grid>

          {isVideoConfirmed ? (
            <Button
              variant="contained"
              className="modelingCancleButton"
            >
              모델링 취소 하기
            </Button>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item key={2} sm={12} md={4} xl={6} className={classes.gridCenter}>
          
          {isVideoConfirmed 
          ? 
            <Paper textAlign="center" className={classes.notice}>
              <Typography
                style={{
                  color: "#FFFFFF",
                  paddingBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                {" "}
                <ErrorOutlineIcon style={{ marginRight: "20px" }} />
                영상 검수 중입니다.
              </Typography>
              <Typography style={{ color: "#FFFFFF" }} variant="body2">
                업로드 하신 영상을 확인하고 있습니다. <br />
                확인 후 자동으로 모델링이 진행됩니다. <br />
                문제가 있을 시 연락드리겠습니다. <br />
                <br />
                <Link
                  style={{
                    marginTOP: "20px",
                    cursor: "pointer",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  }}
                  variant="body2"
                >
                  연락처 업데이트 하러 가기
                </Link>
              </Typography>
            </Paper>
          :
            <Paper textAlign="center" className={classes.notice, classes.noticeFail}>
            <Typography
              style={{
                color: "#FFFFFF",
                paddingBottom: "20px",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              <ErrorOutlineIcon style={{ marginRight: "20px" }} />
              영상을 다시 촬영해야 합니다.
            </Typography>
            <Typography style={{ color: "#FFFFFF" }} variant="body2">
            업로드 하신 영상에 문제가 있습니다. <br />
            촬영가이드를 참조하여 촬영 후<br />
            영상을 다시 업로드 해주세요.<br />
              <br />
              <Link
                style={{
                  marginTOP: "20px",
                  cursor: "pointer",
                  color: "#FFFFFF",
                  textDecoration: "underline",
                }}
                variant="body2"
              >
                연락처 업데이트 하러 가기
              </Link>
            </Typography>
          </Paper>          
          }
        </Grid>
      </Grid>
    </>
  );
}

function StepModeling() {
  return <></>;
}

function StepPublish() {
  return <></>;
}
