import React from "react"
import { Container, Paper, Typography, makeStyles, Button } from "@material-ui/core"
import UploadIcon from '@mui/icons-material/Upload';

const useStyles = makeStyles((theme) => ({
  guideStepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  howToTitle: {
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  howToDescription: {
    marginBottom:'50px',
  },
  howToImage: {
    maxWidth: '90%',
  },
}))

export default function VideoGuide() {
  const classes = useStyles()
  return (
    <Container>
      <Paper
        elevation={1}
        style={{display:'flex', flexDirection:'column', alignItems:'center', padding: '50px 0px', marginBottom:'100px'}}
      >
        <iframe className={classes.howToImage} width="560" height="315" src="https://www.youtube.com/embed/YQsxyssXpoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Container className={classes.guideStepContainer}>
          <Typography variant="h5" style={{fontWeight: 'bold', marginTop: '50px', marginBottom:'10px',}}>
            첫 번째
          </Typography>
          <Typography variant="h4" component={'h6'} style={{fontWeight: 'bold', color: '#5fb8d1'}}>
            촬영준비
          </Typography>
          <img className={classes.howToImage} src="/images/asset_howto_1.png"></img>
          <Typography variant='h5' className={classes.howToTitle} >
            촬영 공간
          </Typography>
          <Typography variant='body1' align={'center'} className={classes.howToDescription}>
            촬영 공간을 확보해 주세요.<br/>
            물체를 기준으로 사방 1 m ~ 1.5 m 정도의 공간이 필요합니다. 
          </Typography>
          <img className={classes.howToImage} src="/images/asset_howto_2.png"></img>
          <Typography variant='h5' className={classes.howToTitle} >
            촬영 조명
          </Typography>
          <Typography variant='body1' align={'center'} className={classes.howToDescription}>
            한 방향에서 비추는 빛은 피하는게 좋아요.<br/>
             사무실과 같이 백색 형광등이 여러 군데에서 비추는 공간이 Best!
          </Typography>
          <img className={classes.howToImage} src="/images/asset_howto_3.png"></img>
          <Typography variant='h5' className={classes.howToTitle}>
            피사체 준비
          </Typography>
          <Typography variant='body1' align={'center'} className={classes.howToDescription}>
            촬영 대상을 공간 중앙에 준비하세요.<br/>
            적당한 높이의 받침대를 활용해도 좋아요. 
          </Typography>


        </Container>
        <Container className={classes.guideStepContainer} style={{backgroundColor:'#f8f8f8'}}>
          <Typography variant="h5" style={{fontWeight: 'bold', marginTop: '50px', marginBottom:'10px',}}>
            두 번째
          </Typography>
          <Typography variant="h4" component={'h6'} style={{fontWeight: 'bold', color: '#5fb8d1', marginBottom: '20px',}}>
            촬영
          </Typography>
          <Container>
            <Paper style={{textAlign: 'center', marginBottom: '50px',}}>
              <video className={classes.howToImage} src="/videos/guideVideo.mp4" muted={true} autoPlay loop></video>
              <Typography variant={'body1'} style={{textAlign:'center', maxWidth: '70%', margin: '0px auto'}}>
              최대한 아래에서 물체의 옆 면을 한 바퀴 돌아가면서 천천히 촬영해 주세요.
              <br/><br/>
              이어서 수직으로부터 약 60도 각도에서 한 바퀴 돌아가면서 천천히 촬영해 주세요.<br/>
              약 30도 각도에서 한 번 더 한 바퀴 천천히 촬영해 주세요.<br/>
              마지막으로 굴곡이 있거나 복잡한 부분을 조금 더 동영상에 담아 주세요. 
              <br/><br/>
              </Typography>
            </Paper>
          </Container>
          <Typography variant="h4" component={'h6'} style={{fontWeight: 'bold', color: 'peru', marginBottom: '20px',}}>
          촬영 시 주의사항
          </Typography>
          <div style={{display:'flex', gap: '20px', alignItems:'center', marginBottom:'50px'}}>
            <img className={classes.howToImage} style={{maxWidth:'260px', width:'50%'}} src="/images/asset_howto_4.png"></img>
            <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
              <span>• 촬영중에 물체가 움직이지 않도록 주의해 주세요. </span>
              <span>• 가능한 한 천천히 움직이면서 촬영해 주세요. </span>
              <span>• 중간에 줌 인 / 줌 아웃이 되지 않도록 주의해 주세요. </span>
              <span>• 물체가 화면 안에 전부 들어오도록 촬영하는 것이 좋습니다. </span>
            </div>            
          </div>
        </Container>
        <Container className={classes.guideStepContainer} style={{marginBottom:'50px'}}>
          <Typography variant="h5" style={{fontWeight: 'bold', marginTop: '50px', marginBottom:'10px',}}>
            세 번째
          </Typography>
          <Typography variant="h4" component={'h6'} style={{fontWeight: 'bold', color: '#5fb8d1'}}>
            전송
          </Typography>
          <Typography variant="body1" style={{marginTop: '50px'}}>
            촬영이 완료되면 간단한 주문서와 함께 <br/>
            완성된 동영상을 업로드 하시면 됩니다!
          </Typography>
          <Button href="#/upload" variant="contained" color="primary" style={{width: '200px', margin: "60px 0px 0px 0px"}}> <UploadIcon/>  새 영상 업로드</Button>
        </Container>
      </Paper>
      <div style={{height:'150px'}}></div>
    </Container>
  )
}