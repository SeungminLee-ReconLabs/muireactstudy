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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
      "Modeling",
      "Modeling Done",
      "Post Processing",
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

  const products = [{
    "id": 1,
    "service_id": 1,
    "category_id": 1,
    "manager_id": 1,
    "phone_model": "509-625-1639",
    "name": "Wine - Sauvignon Blanc Oyster",
    "state": 1,
    "thumbnail_s3key": 1,
    "movie_s3key": 1,
    "product_glb_s3key": 1,
    "product_usdz_s3key": 1,
    "request_id": 1,
    "upload_date": "4/8/2021",
    "deadline_date": "12/21/2020",
    "update_date": "6/10/2021",
    "end_date": "12/2/2020"
  }, {
    "id": 2,
    "service_id": 2,
    "category_id": 2,
    "manager_id": 2,
    "phone_model": "714-188-3596",
    "name": "Vinegar - Rice",
    "state": 2,
    "thumbnail_s3key": 2,
    "movie_s3key": 2,
    "product_glb_s3key": 2,
    "product_usdz_s3key": 2,
    "request_id": 2,
    "upload_date": "10/1/2021",
    "deadline_date": "6/4/2021",
    "update_date": "10/29/2020",
    "end_date": "1/23/2021"
  }, {
    "id": 3,
    "service_id": 3,
    "category_id": 3,
    "manager_id": 3,
    "phone_model": "148-299-4366",
    "name": "Chestnuts - Whole,canned",
    "state": 3,
    "thumbnail_s3key": 3,
    "movie_s3key": 3,
    "product_glb_s3key": 3,
    "product_usdz_s3key": 3,
    "request_id": 3,
    "upload_date": "1/5/2021",
    "deadline_date": "4/13/2021",
    "update_date": "6/30/2021",
    "end_date": "8/9/2021"
  }, {
    "id": 4,
    "service_id": 4,
    "category_id": 4,
    "manager_id": 4,
    "phone_model": "455-760-3922",
    "name": "Cheese - Camembert",
    "state": 4,
    "thumbnail_s3key": 4,
    "movie_s3key": 4,
    "product_glb_s3key": 4,
    "product_usdz_s3key": 4,
    "request_id": 4,
    "upload_date": "12/8/2020",
    "deadline_date": "10/23/2020",
    "update_date": "5/14/2021",
    "end_date": "10/14/2020"
  }, {
    "id": 5,
    "service_id": 5,
    "category_id": 5,
    "manager_id": 5,
    "phone_model": "633-559-6761",
    "name": "Pickerel - Fillets",
    "state": 5,
    "thumbnail_s3key": 5,
    "movie_s3key": 5,
    "product_glb_s3key": 5,
    "product_usdz_s3key": 5,
    "request_id": 5,
    "upload_date": "9/24/2021",
    "deadline_date": "10/1/2021",
    "update_date": "8/4/2021",
    "end_date": "2/21/2021"
  }, {
    "id": 6,
    "service_id": 6,
    "category_id": 6,
    "manager_id": 6,
    "phone_model": "437-544-9000",
    "name": "Pears - Bartlett",
    "state": 6,
    "thumbnail_s3key": 6,
    "movie_s3key": 6,
    "product_glb_s3key": 6,
    "product_usdz_s3key": 6,
    "request_id": 6,
    "upload_date": "9/25/2021",
    "deadline_date": "3/21/2021",
    "update_date": "7/30/2021",
    "end_date": "2/11/2021"
  }, 
  // {
  //   "id": 7,
  //   "service_id": 7,
  //   "category_id": 7,
  //   "manager_id": 7,
  //   "phone_model": "331-468-6077",
  //   "name": "Flour Dark Rye",
  //   "state": 7,
  //   "thumbnail_s3key": 7,
  //   "movie_s3key": 7,
  //   "product_glb_s3key": 7,
  //   "product_usdz_s3key": 7,
  //   "request_id": 7,
  //   "upload_date": "1/8/2021",
  //   "deadline_date": "12/24/2020",
  //   "update_date": "12/30/2020",
  //   "end_date": "12/25/2020"
  // }, {
  //   "id": 8,
  //   "service_id": 8,
  //   "category_id": 8,
  //   "manager_id": 8,
  //   "phone_model": "416-138-9215",
  //   "name": "Yeast Dry - Fermipan",
  //   "state": 8,
  //   "thumbnail_s3key": 8,
  //   "movie_s3key": 8,
  //   "product_glb_s3key": 8,
  //   "product_usdz_s3key": 8,
  //   "request_id": 8,
  //   "upload_date": "12/27/2020",
  //   "deadline_date": "7/5/2021",
  //   "update_date": "10/26/2020",
  //   "end_date": "8/11/2021"
  // }, {
  //   "id": 9,
  //   "service_id": 9,
  //   "category_id": 9,
  //   "manager_id": 9,
  //   "phone_model": "312-217-4514",
  //   "name": "Basil - Seedlings Cookstown",
  //   "state": 9,
  //   "thumbnail_s3key": 9,
  //   "movie_s3key": 9,
  //   "product_glb_s3key": 9,
  //   "product_usdz_s3key": 9,
  //   "request_id": 9,
  //   "upload_date": "5/25/2021",
  //   "deadline_date": "6/24/2021",
  //   "update_date": "12/19/2020",
  //   "end_date": "4/18/2021"
  // }, {
  //   "id": 10,
  //   "service_id": 10,
  //   "category_id": 10,
  //   "manager_id": 10,
  //   "phone_model": "860-264-6414",
  //   "name": "Sobe - Green Tea",
  //   "state": 10,
  //   "thumbnail_s3key": 10,
  //   "movie_s3key": 10,
  //   "product_glb_s3key": 10,
  //   "product_usdz_s3key": 10,
  //   "request_id": 10,
  //   "upload_date": "4/25/2021",
  //   "deadline_date": "3/8/2021",
  //   "update_date": "12/22/2020",
  //   "end_date": "12/27/2020"
  // }, {
  //   "id": 11,
  //   "service_id": 11,
  //   "category_id": 11,
  //   "manager_id": 11,
  //   "phone_model": "931-295-0971",
  //   "name": "Nantucket Orange Juice",
  //   "state": 11,
  //   "thumbnail_s3key": 11,
  //   "movie_s3key": 11,
  //   "product_glb_s3key": 11,
  //   "product_usdz_s3key": 11,
  //   "request_id": 11,
  //   "upload_date": "6/19/2021",
  //   "deadline_date": "3/2/2021",
  //   "update_date": "3/22/2021",
  //   "end_date": "2/5/2021"
  // }, {
  //   "id": 12,
  //   "service_id": 12,
  //   "category_id": 12,
  //   "manager_id": 12,
  //   "phone_model": "777-630-2087",
  //   "name": "Dawn Professionl Pot And Pan",
  //   "state": 12,
  //   "thumbnail_s3key": 12,
  //   "movie_s3key": 12,
  //   "product_glb_s3key": 12,
  //   "product_usdz_s3key": 12,
  //   "request_id": 12,
  //   "upload_date": "10/24/2020",
  //   "deadline_date": "5/8/2021",
  //   "update_date": "8/8/2021",
  //   "end_date": "4/25/2021"
  // }
]

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
          <Grid container  spacing={4}>
            {/sort/.test(props.history.location.search) ? <></> : 
            (<>
              <Grid item key={1} xs={12} md={4} style={{padding:  '16px 12px'}}>
                <Paper style={{height: '136px'}}>
                  {/* <Typography variant="h5" color="primary" style={{padding: '16px'}}>총 모델 수</Typography> */}
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
            {products.map((product) => (
              <Grid item key={product} xs={12} sm={6} md={4} style={{padding:  '16px 12px'}}>
                <Card                >
                  <CardContent>
                    <Typography gutterBottom {...cardTitleProps} style={{margin: '0px', display:'flex', justifyContent:'space-between'}}>
                      {product.name}
                      <ReportProblemOutlinedIcon style={{color:'red',transform: 'scale(1.6)', position:'relative',top:'10px'}}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                      {product.state}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    className = {classes.media}
                    component="img"
                    image="https://source.unsplash.com/random"
                    // image={product.thumbnail_s3key}
                    alt="random"
                  />
                  <CardActions>
                    <Button 
                      size="small" 
                      color="primary"
                      // color="secondary"
                    >
                      VIEW DETAIL</Button>
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