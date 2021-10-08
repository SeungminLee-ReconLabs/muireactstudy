import * as React from 'react';
import { Typography, Container, Paper, Grid,Box } from '@material-ui/core';
import ProductDetail from './ProductDetail'
import ProcessNavigatorAndManager from './ProcessNavigatorAndManager'
import { Title } from 'ra-ui-materialui';

const drawerWidth = 300;

/**
 * 대시보드 구조:
 * 좌측 네비서랍( Drawer)
 * 최상단 텍스트 및 프로필 
 * ↑ 이 위에있는 애들도 별도의 파일로 분리하기
 * 상단 제품상세 (ProductDetail.js)
 * 중간 PLM Stepper (ProcessNavigatorAndManager.js)
 * 하단 실제 PLM Steps (PlmSteps > video_1, ... 숫자로 ? )
 */

function DashboardComponent(props) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


  console.log('💚💚💚💚💚💚💚💚💚💚💚💚💚💚💚💚💚💚💚💚')
  console.log(props)
  const taskID = props.match.params.taskID
  const productID = props.match.params.productID
  const plmProcessStep = props.match.params.plmProcessStep


  return (
      <Box sx={{ display: 'flex' }}>
        <Title title="커스텀페이지제목" />
        <Box
          component="main"
        >
          {/* <Toolbar /> */}
          {/* mui에서의 숫자는 모두 px 픽셀단위 또는 8px의 배수인데,, 기준을  모르겠네 아직 */}
          {/* 일단 margin, padding은 8px의 배수,  height, width는 px */}
          {/* grid를 flex처럼 쓸 수 있다. */}
          <Grid container maxWidth="false" sx={{padding: 5, height: 160 }}> 
            <Grid item xs={12} md={10} lg={10}>
              <Typography
                component="h2"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Product management
              </Typography>
              <Typography
                component="h2"
                variant="body1"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                All products
              </Typography>
            </Grid>
            {/* <Grid item xs={12} md={2} lg={2}>
              <div>프로필 사진, 이름, 이메일</div>
            </Grid> */}
          </Grid>
          <Container maxWidth="false" sx={{ mt: 0, mb: 4 }}>
            {/* spacing: 그리드끼리의 간격 */}
            {/* Grid container와 Grid item으로 구분된다 상세한것은 Papaer안에 Component를  넣어서 만든다 */}
            {/* Grid container > Grid itme > Paper > 우리가 만든 컴포넌트 순 */}
            {/* 우리꺼는 상단부와 하단부로 나뉜다. 상단부는 계속  독같은거,  */}
            {/* 페이퍼가 흰색을 담당한다 */}
            <Grid container spacing={3}> 
              {/* 대시보드 상단부: 제품정보 */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <ProductDetail />
                </Paper>
              </Grid>
              {/* 대시보두 중하단부: 단계 및 Form */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <ProcessNavigatorAndManager plmProcessStep={plmProcessStep} />
                </Paper>
              </Grid>

            </Grid>
          </Container>
        </Box>
      </Box>
  );
}

export default DashboardComponent
// export default function Dashboard() {
//   return <DashboardComponent />;
// }