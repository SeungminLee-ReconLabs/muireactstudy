import * as React from 'react';
/* Material-ui version 4 */
import {
  AppBar, Button, Card,
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
} from '@material-ui/core';
/* MUI version 5 */
import Pagination from '@mui/material/Pagination';

/* Icons */
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { reconlabsWhite, } from '../cssVariables';

/** 더미데이터 */
import DummyProduts from '../DummyData/DummyProducts';


const useProductsStyles = makeStyles((theme)=> ({
  media: {
    maxHeight: '345px',
  },
}))


export default function Products(props) {
  /* dummy fetched data
    ref)  https://marmelab.com/react-admin/DataProviders.html#getlist
  */
  const product_state_enum = [
    "Registration",
    "Registration Failed",
    "Modeling",
    "Modeling Failed",
    "Modeling Done",
    "Post Processing",
    "Post Failed",
    "Post Done",
    "Packaging",
    "Discarded",
    "Done",
  ];
  
  const oneProduct = {
      id: 1, //int(11) [pk, not null, increment]
      service_id: 1, //int(11) [not null]
      category_id: 1, //int(11) [not null]
      client_id: 1, //int(11) [not null]
      manager_id: 1, //int(11) [default: NULL]
      phone_model: "01075334963", //varchar(100) [default: NULL]
      name: "4인용 식탁", //varchar(100) [default: NULL]
      state: "Registration", //product_state_enum [not null]
      memo: "", //text [default: NULL]
      thumbnail_s3key: "", //text [default: NULL]
      movie_s3key: "", //text [default: NULL]
      product_glb_s3key: "", //text [default: NULL]
      product_usdz_s3key: "", //text [default: NULL]
      request_id: "", //int(11) [not null]
      upload_date: "", //timestamp [not null, default: `current_timestamp()`]
      deadline_date: "", //timestamp [default: NULL]
      update_date: "", //timestamp [not null, default: `current_timestamp()`]
      end_date: "", //timestamp [default: NULL]
  };

  const products = DummyProduts;

  const classes = useProductsStyles();
  console.log(props)
  const theme = useTheme();
  const isSMScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const cardTitleProps = {
    variant: isSMScreen ? "h6" : "h5" 
  }

  const currentPlanStateTitleProps = {
    variant: isSMScreen ? "h6" : "h5" ,
    color: "primary",
  }
  const currentPlanStateDataProps = {
    variant: isSMScreen ? "h4" : "h3",
    align: "center" 
  }

  return (
    <>
      <CssBaseline />
        {/* Hero unit */}
        {/* maxWidth가 알아서 적절한 크기를 정해준다 */}
        <Container maxWidth="xl" 
          style={{overflow: 'visible', backgroundColor: reconlabsWhite}}
        >
          {/* End hero unit */}
          <Grid container  spacing={0}>
            {/* 총 모델 수, 모델링 가능 횟수, 모델 뷰 */}
            {/sort/.test(props.history.location.search) ? <></> : 
            (<>
              <Grid item key={1} xs={12} md={4} style={{padding:  '16px 12px'}}>
                <Paper style={{height: '136px'}}>
                  <Typography {...currentPlanStateTitleProps} style={{padding: '16px'}}>총 모델 수</Typography>
                  <Typography {...currentPlanStateDataProps} >{products.length}</Typography>
                </Paper>
              </Grid>
              <Grid item key={2} xs={12} md={4} style={{padding:  '16px 12px'}}>
                <Paper style={{height: '136px'}}>
                  <Typography {...currentPlanStateTitleProps} style={{padding: '16px'}}>모델링 가능 횟수</Typography>
                  <Typography {...currentPlanStateDataProps} >2/3</Typography>
                </Paper>
              </Grid>
              <Grid item key={3} xs={12} md={4} style={{padding:  '16px 12px'}}>
                <Paper style={{height: '136px'}}>
                  <Typography {...currentPlanStateTitleProps} style={{padding: '16px'}}>모델 뷰</Typography>
                  <Typography {...currentPlanStateDataProps} >500/1000</Typography>
                </Paper>
              </Grid>
            </>)}
            {/* 카드형식 제품목록 */}
            {products.map((product) => (
              <Grid item key={product} xs={12} sm={6} md={4} style={{padding:  '16px 12px'}}>
                <Card                >
                  <CardContent>
                    <Typography gutterBottom {...cardTitleProps} style={{margin: '0px', display:'flex', justifyContent:'space-between'}}>
                      {product.name}
                      {/* 실패 아이콘 */}
                      {["Registration Failed", "Modeling Failed", "Post Failed"].includes(product.state) ? <ReportProblemOutlinedIcon style={{color:'red',transform: 'scale(1.6)', position:'relative',top:'10px'}}/> : <></>}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                      {product.state}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    className = {classes.media}
                    component="img"
                    image={product.thumbnail_s3key}
                    alt="random"
                  />
                  <CardActions>
                    {/* 제품별 상세페이지 이동 */}
                    <Button 
                      size="small" 
                      color="primary"
                      style={{width: '100px',}}
                      href={`#/products/${product.id}`}
                      // color="secondary"
                    >
                      VIEW DETAIL
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Container style={{display:'flex', justifyContent:'center', margin: '20px auto'}}>
            <Pagination />
          </Container>
        </Container>
    </>
  );
}