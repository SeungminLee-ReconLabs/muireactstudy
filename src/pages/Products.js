import * as React from 'react';
/* Material-ui version 4 */
import {
  AppBar, Button, Card,
  CardActions,
  CardActionArea,
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


const useProductsStyles = makeStyles((theme) => ({
  media: {
    maxHeight: "345px",
  },
  userPlanMetaDataPaper: {
    height: "136px",
    position: "relative",
  },
  userPlanMetaDataTitle: {
    position: 'absolute',
    padding: '16px',
  },
  gridItem: {
    padding: '16px 12px'
  }
}));


export default function Products(props) {
  /* dummy fetched data
    ref)  https://marmelab.com/react-admin/DataProviders.html#getlist
  */
  const products = DummyProduts;
  const classes = useProductsStyles();
  console.log(props)
  const theme = useTheme();
  const isSMScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const cardTitleProps = {
    variant: isSMScreen ? "h6" : "h5",
    gutterBottom: true,
  }

  const currentPlanStateTitleProps = {
    variant: isSMScreen ? "h6" : "h5" ,
    color: "primary",
  }
  const currentPlanStateDataProps = {
    variant: isSMScreen ? "h4" : "h3",
    align: "center",
    style: {paddingTop:  '50px',}
  }

  return (
    <>
      <CssBaseline />
        {/* Hero unit */}
        {/* maxWidth가 알아서 적절한 크기를 정해준다 */}
        <Container maxWidth="xl" 
          className="product-card-list-container"
          style={{overflow: 'visible', backgroundColor: reconlabsWhite}}
        >
          {/* End hero unit */}
          <Grid container spacing={0} 
          maxWidth='xl'>
            {/* 총 모델 수, 모델링 가능 횟수, 모델 뷰 */}
            {/sort/.test(props.history.location.search) ? <></> : 
            (<>
              <Grid item key={1} xs={12} md={4} className={classes.gridItem}>
                <Paper className={classes.userPlanMetaDataPaper}>
                  <Typography {...currentPlanStateTitleProps} className={classes.userPlanMetaDataTitle}>총 모델 수</Typography>
                  <Typography {...currentPlanStateDataProps} >{products.length}</Typography>
                </Paper>
              </Grid>
              <Grid item key={2} xs={12} md={4} className={classes.gridItem}>
                <Paper className={classes.userPlanMetaDataPaper}>
                  <Typography {...currentPlanStateTitleProps} className={classes.userPlanMetaDataTitle}>모델링 가능 횟수</Typography>
                  <Typography {...currentPlanStateDataProps} >2/3</Typography>
                </Paper>
              </Grid>
              <Grid item key={3} xs={12} md={4} className={classes.gridItem}>
                <Paper className={classes.userPlanMetaDataPaper}>
                  <Typography {...currentPlanStateTitleProps} className={classes.userPlanMetaDataTitle}>모델 뷰</Typography>
                  <Typography {...currentPlanStateDataProps} >500/1000</Typography>
                </Paper>
              </Grid>
            </>)}
            {/* 카드형식 제품목록 */}
            {products.map((product) => (
              <Grid item key={product} xs={12} sm={6} md={4} className={classes.gridItem}>
                <Card>
                  <CardActionArea>
                    <CardContent style={{position: 'relative'}}>
                      <Typography noWrap className="product-card-title" {...cardTitleProps} style={{ margin: '0px', justifyContent:'space-between'}}>
                        {product.name}
                        {/* 실패 아이콘 */}
                      </Typography>
                      {["Registration Failed", "Modeling Failed", "Post Failed"].includes(product.state) ? <ReportProblemOutlinedIcon style={{color:'red',transform: 'scale(1.6)', backgroundColor:'white', position:'absolute',top:'20px', right: '20px'}}/> : <></>}
                      <Typography gutterBottom variant="body2" color="text.secondary">
                        {product.state}
                      </Typography>
                    </CardContent>
                    <CardMedia
                      className = {classes.media}
                      component="img"
                      image={product.thumbnail_s3key}
                      alt={product.name}
                    />
                  </CardActionArea>
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