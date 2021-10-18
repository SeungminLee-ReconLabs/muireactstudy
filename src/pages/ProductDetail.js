import React, {useEffect} from "react";
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
import { reconlabsPrimaryYellow, reconlabsWhite } from "../cssVariables";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { fontWeight } from "@mui/system";

/* 조건부 className 추가하기위한 모듈 */
import clsx from 'clsx'; 

/* 영상확인+모델링중, 발행 컴포넌트 */
import StepPublish from '../component/productdetails/StepPublish'
import StepVideoAndModeling from '../component/productdetails/StepVideoAndModeling'

/** DummyProducts */
import DummyProducts from "../DummyData/DummyProducts";

const useProductDetailStyle = makeStyles((theme) => ({
  root: {
    marginBottom: "10px",
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
  outlineTextField: {
    width: '100%',
  }
}));

export default function ProductDetail(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  const classes = useProductDetailStyle();
  // 더미 데이터 코드
  let productID = props.match.params.productID;
  let product = DummyProducts[productID-1]
  // 더미 데이터 코드 END
  const theme = useTheme();
  const isSMScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      {/* Appbar 하단 제품 메타정보 */}
      <Container  className={classes.root}>
        <Paper elevation={1} style={{padding: '1px'}} className={classes.paper, "ProductMetaData"}>
          <Button
            style={{
              margin:'10px',
              width: "130px",
              display: "flex",
            }}
          >
            <ArrowBackIcon
              style={{ color: reconlabsPrimaryYellow, marginRight: "6px" }}
            />
            <Typography color="primary" marginLeft="6px" onClick={props.history.goBack}>
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
          <Container style={{ marginTop: '25px',}}>
            <TextField
              required
              id="outlined-required"
              label="Product Name"
              defaultValue={product.name}
              variant="outlined"
              className={classes.outlineTextField}
            />
          </Container>
          <Container style={{margin: '25px 0'}}>
            {/* Product Meta Data */}
            <Grid container>
              <Grid item key="product-meta-data-1" lg={3} md={6} xs={6}>
                <TextField
                  id="standard-read-only-input"
                  label="Product Number"
                  defaultValue="--"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{
                    width: '80%'
                  }}
                />
              </Grid>
              <Grid item key="product-meta-data-2" lg={3} md={6} xs={6}>
                <TextField
                  id="standard-read-only-input"
                  label="최종 수정 일시"
                  defaultValue="--"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{
                    width: '80%'
                  }}
                />
              </Grid>
              <Grid item key="product-meta-data-3" lg={3} md={6} xs={6}>
                <TextField
                  id="standard-read-only-input"
                  label="영상 업로드 일시"
                  defaultValue="-"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{
                    width: '80%'
                  }}
                />
              </Grid>
              <Grid item key="product-meta-data-4" lg={3} md={6} xs={6}>
                <TextField
                  id="standard-read-only-input"
                  label="모델 발행 일시"
                  defaultValue="-"
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{
                    width: '80%'
                  }}
                />
              </Grid>
            </Grid>
          </Container>
          <Container style={{margin: '25px 0'}}>
            {/* Product Description and History */}
            <Grid container spacing={3}>
              <Grid item key="product-description" lg={6} sm={12} xs={12}>
                <TextField
                  multiline
                  required
                  id="outlined-required"
                  label="Product description"
                  defaultValue="제품을 모델링할 때 참고할 사항에 대하여 작성해주세요."
                  variant="outlined"
                  className={classes.outlineTextField}
                />
              </Grid>
              <Grid item key="model-history" lg={6} sm={12} xs={12}>
                <TextField
                  multiline
                  // required
                  id="outlined-required"
                  label="Model history"
                  defaultValue="(2021.09.11) 영상이 업로드 되었습니다."
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  className={classes.outlineTextField}
                />
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Container>
      {/* Stepper 와 단계별 컴포넌트 */}
      <ProductStep product={product} />
    </>
  );
}

const useStepperStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // minHeight:'1500px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function ProductStep({product}) {
  /* 
  TODO) sprint6
  * product.state은 fetch product의 Enum product.state를 통해 결정되도록 코딩
  * product.state에 따라 userStepNum(고객이 보는 단계)이 결정됨
  */
  const classes = useStepperStyles();
  /**
   * product.state <String>
   * "Registration",
   * "Registration Failed",
   * "Modeling",
   * "Modeling Failed",
   * "Modeling Done",
   * "Post Processing",
   * "Post Failed",
   * "Post Done",
   * "Packaging",
   * "Discarded",
   * "Done",
   */
  
  /**Number: 0(영상 확인), 1(모델링 중), 2(발행) */
  let userStepNum;
    switch(product.state) {
      case "Registration":
      case "Registration Failed" :
        userStepNum = 0;  
        break;
      case "Modeling" :
      case "Modeling Failed" :
      case "Post Processing" :
      case "Post Failed":
        userStepNum = 1;  
        break;
      case "Modeling Done" :
      case "Post Done" :
      case "Done":
        userStepNum = 2;  
        break;
    }        
  
  const userSteps = ["영상 확인", "모델링 중", "발행"];
  let stepComponent = (userStepNum) => {
    switch (userStepNum) {
      case 0:
      case 1:
        return <StepVideoAndModeling product={product} />;
      case 2:
        return <StepPublish product={product} />;
    }
  };
  return (
    <Container  className={classes.root}>
      {/* 진행단계를 나타내는 Stepper, Discarded state일 경우 보여주지 않는다 */}
      {product.state === "Discarded" ? <></> :
        <Stepper activeStep={userStepNum} alternativeLabel className="ProductStepper">
          {userSteps.map((userStep) => (
            <Step key={userStep}>
              <StepLabel>
                {" "}
                <Typography variant="subtitle2">{userStep}</Typography>
                <Typography variant="body2" style={{fontWeight:'500', fontFamily:"Noto Sans", fontSize: '10px'}}>2021/09/01</Typography>
                <Typography variant="body2" style={{fontWeight:'500', fontFamily:"Noto Sans", fontSize: '10px'}}>21:01:06</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      }
      {/* 단계별 컴포넌트 */}
      <Paper className="productDetail-step-component" elevation={1} >{stepComponent(userStepNum)}</Paper>
      {/* Published 컴포넌트 하단 여백 */}
      <div style={{height:'150px'}}></div>
    </Container>
  );
}

