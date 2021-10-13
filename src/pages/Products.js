import * as React from 'react';
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
} from '@material-ui/core';
// 아이콘
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Products(props) {
  console.log(props)
  const theme = useTheme();
  const isSMScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const cardTitleProps = {
    variant: isSMScreen ? "h6" : "h5" 
  }
  return (
    <>
      <CssBaseline />
        {/* Hero unit */}
        {/* maxWidth가 알아서 적절한 크기를 정해준다 */}
        <Container maxWidth="lg" 
          // sx={{marginTop: '400px', overflow: 'visible'}}
        >
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent>
                    <Typography gutterBottom {...cardTitleProps} style={{margin: '0px', display:'flex', justifyContent:'space-between'}}>
                      모델 이름
                      <ReportProblemOutlinedIcon style={{color:'red',transform: 'scale(1.6)', position:'relative',top:'10px'}}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                      발행 완료
                    </Typography>
                  </CardContent>
                  <CardMedia
                    style={{height: '192px',}}
                    component="img"
                    image="https://source.unsplash.com/random"
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
        </Container>
    </>
  );
}