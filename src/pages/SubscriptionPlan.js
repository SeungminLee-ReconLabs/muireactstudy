import React from 'react'
import {
  Container,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  makeStyles,
  Typography,
  Grid
} from "@material-ui/core"
import { reconlabsPrimaryYellow,reconlabsSecondaryYellow } from '../cssVariables';

const useSubscriptionPlanStyles = makeStyles((theme)=>({
  Paper:{
    display: 'flex',
    justifyContent: 'center',
    padding: '50px'
  }
  ,
  RadioGroup: {
    display:'flex',
    flexDirection:'column',
    gap: '20px',
  }
  ,
  RadioOutlineContainer: {
    /* Auto Layout */
    width: 'clamp(350px, 40vw, 1000px)',
    boxSizing: 'border-box',
    borderRadius: '4px',
    background: '#FFFFFF',
    border: `2px solid ${reconlabsSecondaryYellow}`,
  }
  ,
  RadioSelected: {
    /* selected */
    border: `2px solid ${reconlabsPrimaryYellow}`,
  }
  ,
  FormControlLabel: {
    marginRight: '0px',
    marginLeft: '16px',
    height: '100%',
  }
  ,
  PlanInfomation: {
    // width: '100%',
    // display:'flex',
    // justifyContent:'space-between',
    // position:'absolute',
  }
  ,
  PlanDescription: {
    width: '100%',
  },
  PriceText : {
    display:'flex',
    alignItems:'center',
    justifyContent: 'end',
    paddingRight: '20px',
  }
}))


export default function SubscribePlan() {
  const [value, setValue] = React.useState()
  const  classes = useSubscriptionPlanStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addSelectedDesign = (event) => {
    const allRadioContainer = document.querySelectorAll(`.${classes.RadioOutlineContainer}`)
    for(let target of allRadioContainer) {
      target.classList.remove(classes.RadioSelected)
    }

    if (event.currentTarget.classList.contains(classes.RadioOutlineContainer)){
      event.currentTarget.classList.add(classes.RadioSelected)
      return
    }
  }

  const removeSelectedDesign = (event) => {
    console.log(event.currentTarget)
    // if (event.currentTarget.classList.contains(classes.RadioOutlineContainer)){
      event.target.classList.remove(classes.RadioSelected)
      event.currentTarget.classList.remove(classes.RadioSelected)
      // return
    // }
  }

  return (
    <Container maxWidth='lg'>

      <Paper className={classes.Paper}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="subscriptionPlan" className={classes.RadioGroup} value={value} onChange={handleChange}>
            {/* <label>로 감싸면, label 하위에 있는 아무 요소를 클릭하였을 때, radio가 선택된다  */}
            <label>
              <Grid container className={classes.RadioOutlineContainer} onClick={addSelectedDesign}>
                <Grid item md={3} xs={12}>
                  <FormControlLabel className={classes.FormControlLabel }  value="Free" control={<Radio color="primary"></Radio>} label="Free" />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ul className={classes.PlanDescription}>
                    <li>매달 1건의 모델 추가 생성 가능</li>
                    <li>모델 뷰어  100 제한</li>
                  </ul>
                </Grid>
                <Grid item md={3} xs={12} className={classes.PriceText}>
                  <Typography variant='body1'>Free</Typography>
                </Grid>
              </Grid>
            </label>
            <label>
              <Grid container onClick={addSelectedDesign} className={classes.RadioOutlineContainer}>
                <Grid item md={3} xs={12}>
                  <FormControlLabel className={classes.FormControlLabel} value="Basic" control={<Radio color="primary" />} label="Basic" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <ul className={classes.PlanDescription}>
                    <li>매달 3건의 모델 추가 생성 가능</li>
                    <li>모델 뷰어 1000 제한</li>
                  </ul>
                </Grid>                
                <Grid item md={3} xs={12} className={classes.PriceText}>
                  <Typography variant='body1'><span style={{textDecoration:'line-through', opacity: 0.3, }}>49,000원 / 매월</span> Free</Typography></Grid>
              </Grid>
            </label>            
            <label>
              <Grid container className={classes.RadioOutlineContainer} onClick={addSelectedDesign}>
                <Grid item md={3} xs={12}>
                  <FormControlLabel className={classes.FormControlLabel} value="Premium" control={<Radio color="primary" />} label="Premium" />
                </Grid>
                <Grid item md={6} xs={12} className={classes.PlanInfomation}>
                  <ul className={classes.PlanDescription}>
                    <li>매달 8건의 모델 추가 생성 가능</li>
                    <li>모델 뷰어 10000 제한</li>
                  </ul>
                </Grid>
                <Grid item md={3} xs={12} className={classes.PriceText}>
                  <Typography variant='body1' component='a' href="#/about">가격 문의</Typography>
                </Grid>
              </Grid>
            </label>
            <label>
              <Grid container className={classes.RadioOutlineContainer} onClick={addSelectedDesign}>
                <Grid item md={3} xs={12}>
                  <FormControlLabel className={classes.FormControlLabel} value="Enterprise" control={<Radio color="primary" />} label="Enterprise" />
                </Grid>
                <Grid item md={6} xs={12} className={classes.PlanInfomation}>
                  <ul className={classes.PlanDescription}>
                    <li>원하는 수 의 모델 생성 가능</li>
                    <li>고객사 방문 촬영</li>
                    <li>실측을 통한 더 정확한 모델링</li>
                    <li>후처리를 통한 고품질 모델링</li>
                    <li>모델간의 다양한 조합 제공</li>
                    <li>All-in-one 배포 키트 제공</li>
                    <li>상세페이지 삽입용 버튼, GIF 제공</li>
                    <li>모델 뷰어 무제한</li>
                    <li>Facebook, Instrgram AR 렌즈 제공</li>
                  </ul>
                </Grid>
                <Grid item md={3} xs={12} className={classes.PriceText}>
                  <Typography variant='body1' component='a' href="#/about">가격 문의</Typography>
                </Grid>
              </Grid>
            </label>
          </RadioGroup>
        </FormControl>
      </Paper>
    </Container>
  )}

  // .MuiRadio-colorSecondary.Mui-checked