import React, { useEffect } from "react";
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
  Box,
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
import { reconlabsPrimaryYellow, reconlabsWhite } from "../../cssVariables";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { fontWeight } from "@mui/system";

/* 조건부 className 추가하기위한 모듈 */
import clsx from "clsx";

const useVideoStepStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  notice: {
    width: "325px",
    height: "186px",
    backgroundColor: "#4D74FA",
    padding: "16px",
  },
  noticeFail: {
    backgroundColor: "#F73B11",
  },
  noticeTitle: {
    color: "#FFFFFF",
    paddingBottom: "20px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  },
  videoImg: {
    maxWidth: "90%",
    width: "716px",
    height: "343px",
    backgroundColor: "black",
  },
  noticeGrid: {
    display: "flex",
    justifyContent: "center",
  },
  modelingCancelButton: {
    width: "716px",
    height: "42px",
    marginTop: "15px",
  },
  videoGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
  },

  videoMetaDataGrid: {
    marginTop: "10px",
    maxWidth: "90%",
    width: "716px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

/**
 * @param {Object} props - { product } 의 형태
 * @param {Number} product - 개별 제품정보
 * @returns
 */
export default function StepVideoAndModeling({ product }) {
  // 스크롤 최상단 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let classes = useVideoStepStyles();
  let PLMstepName;
  switch (product.state) {
    case "Registration":
      PLMstepName = "videoSubmitted";
      break;
    case "Registration Failed":
      PLMstepName = "videoRejected";
      break;
    case "Modeling":
      PLMstepName = "modelingOngoing";
      break;
    case "Modeling Failed":
      PLMstepName = "modelingFailed";
      break;
    case "Post Processing":
      PLMstepName = "postProcessingOngoing";
      break;
    case "Post Failed":
      PLMstepName = "postProcessingFailed";
      break;
  }

  const isVideoConfirmed = true;
  const processStep = false;
  const noticeTitleMsg = {
    videoSubmitted: "영상 검수 중입니다.",
    videoRejected: "영상을 다시 촬영해야 합니다.",
    modelingOngoing: "모델링 진행 중 입니다.",
    modelingFailed: "모델링에 실패하였습니다.",
    postProcessingOngoing: "후처리 진행 중 입니다.",
    postProcessingFailed: "후처리에 실패하였습니다.",
  };
  const noticeBody = {
    videoSubmitted: [
      "업로드 하신 영상을 확인하고 있습니다.",
      "확인 후 자동으로 모델링이 진행됩니다.",
      "문제가 있을 시 연락드리겠습니다.",
    ],
    videoRejected: [
      "업로드 하신 영상에 문제가 있습니다.",
      "촬영가이드를 참조하여 촬영 후",
      "영상을 다시 업로드 해주세요.",
    ],
    modelingOngoing: [
      "실감나는 모델링을 제작 중입니다.",
      "모델링이 완성되면 자동으로 발행 됩니다.",
      "문제가 있을 시 연락드리겠습니다.",
    ],
    modelingFailed: [
      "상세 모델링 서비스를 이용하여",
      "모델링을 계속 완성 하실 수 있습니다.",
      "자세한 사항은 리콘랩스로 문의 부탁드립니다.",
    ],
    postProcessingOngoing: [
      "상세 모델링 중입니다.",
      "모델링이 완성되면 자동으로 발행 됩니다.",
      "문제가 있을 시 연락드리겠습니다.",
    ],
    postProcessingFailed: [
      "상세 모델링 서비스를 이용하여",
      "모델링을 계속 완성 하실 수 있습니다. ",
      "자세한 사항은 리콘랩스로 문의 부탁드립니다.",
    ],
  };

  const noticeLinkAndMsg = {
    videoSubmitted: {
      link: "",
      msg: "연락처 업데이트 하러 가기",
    },
    videoRejected: {
      link: "",
      msg: "촬영 가이드 바로가기",
    },
    modelingOngoing: {
      link: "",
      msg: "연락처 업데이트 하러 가기",
    },
    modelingFailed: {
      link: "",
      msg: "상세 모델링 문의하기",
    },
    postProcessingOngoing: {
      link: "",
      msg: "연락처 업데이트 하러 가기",
    },
    postProcessingFailed: {
      link: "",
      msg: "상세 모델링 문의하기",
    },
  };

  return (
    <>
      <Container className="StepVideoAndModeling">
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          <Grid
            item
            key={1}
            md={8}
            sm={12}
            className={classes.videoGrid}
          >
            <img className={classes.videoImg}></img>
            {/* 영상검수/거절 영상메타정보 */}
            {PLMstepName === "videoSubmitted" ||
            PLMstepName === "videoRejected" ? (
              // 영상 정보
              <Grid container className={classes.videoMetaDataGrid}>
                <Grid item key={1} md={4} xs={12}>
                  <TextField
                    defaultValue="---"
                    label="용량"
                    InputProps={{ readOnly: true }}
                  ></TextField>{" "}
                </Grid>
                <Grid item key={2} md={4} xs={12}>
                  <TextField
                    defaultValue="---"
                    label="영상 제목"
                    InputProps={{ readOnly: true }}
                  ></TextField>{" "}
                </Grid>
                <Grid item key={3} md={4} xs={12}>
                  <TextField
                    defaultValue="---"
                    label="영상 길이"
                    InputProps={{ readOnly: true }}
                  ></TextField>{" "}
                </Grid>
              </Grid>
            ) : (
              <></>
            )}

            {/* 영상검수 전 취소버튼 */}
            {PLMstepName === "videoSubmitted" ? (
              <Button
                variant="contained"
                color="secondary"
                className={classes.modelingCancelButton}
              >
                모델링 취소 하기
              </Button>
            ) : (
              <></>
            )}
          </Grid>
          <Grid
            item
            key={2}
            md={4}
            sm={12}
            className={classes.noticeGrid}
          >
            <Paper
              textAlign="center"
              className={clsx(classes.notice, {
                [classes.noticeFail]:
                  PLMstepName == "videoRejected" ||
                  PLMstepName == "modelingFailed",
              })}
            >
              <Typography className={classes.noticeTitle}>
                {" "}
                <ErrorOutlineIcon style={{ marginRight: "20px" }} />
                {/* 영상 검수 중입니다. */}
                {noticeTitleMsg[PLMstepName]}
              </Typography>
              <Typography style={{ color: "#FFFFFF" }} variant="body2">
                {/* 업로드 하신 영상을 확인하고 있습니다. <br />
                    확인 후 자동으로 모델링이 진행됩니다. <br />
                    문제가 있을 시 연락드리겠습니다. <br /> */}
                {noticeBody[PLMstepName][0]} <br />
                {noticeBody[PLMstepName][1]} <br />
                {noticeBody[PLMstepName][2]} <br />
                {noticeBody[PLMstepName][3] ? (
                  noticeBody[PLMstepName][3]
                ) : (
                  <></>
                )}{" "}
                {noticeBody[PLMstepName][3] ? <br /> : <></>}
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
                  {/* 연락처 업데이트 하러 가기 */}
                  {noticeLinkAndMsg[PLMstepName].msg}
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
