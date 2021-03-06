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
            {/* <label>??? ?????????, label ????????? ?????? ?????? ????????? ??????????????? ???, radio??? ????????????  */}
            <label>
              <Grid container className={classes.RadioOutlineContainer} onClick={addSelectedDesign}>
                <Grid item md={3} xs={12}>
                  <FormControlLabel className={classes.FormControlLabel }  value="Free" control={<Radio color="primary"></Radio>} label="Free" />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ul className={classes.PlanDescription}>
                    <li>?????? 1?????? ?????? ?????? ?????? ??????</li>
                    <li>?????? ??????  100 ??????</li>
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
                    <li>?????? 3?????? ?????? ?????? ?????? ??????</li>
                    <li>?????? ?????? 1000 ??????</li>
                  </ul>
                </Grid>                
                <Grid item md={3} xs={12} className={classes.PriceText}>
                  <Typography variant='body1'><span style={{textDecoration:'line-through', opacity: 0.3, }}>49,000??? / ??????</span> Free</Typography></Grid>
              </Grid>
            </label>            
            <label>
              <Grid container className={classes.RadioOutlineContainer} onClick={addSelectedDesign}>
                <Grid item md={3} xs={12}>
                  <FormControlLabel className={classes.FormControlLabel} value="Premium" control={<Radio color="primary" />} label="Premium" />
                </Grid>
                <Grid item md={6} xs={12} className={classes.PlanInfomation}>
                  <ul className={classes.PlanDescription}>
                    <li>?????? 8?????? ?????? ?????? ?????? ??????</li>
                    <li>?????? ?????? 10000 ??????</li>
                  </ul>
                </Grid>
                <Grid item md={3} xs={12} className={classes.PriceText}>
                  <Typography variant='body1' component='a' href="#/about">?????? ??????</Typography>
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
                    <li>????????? ??? ??? ?????? ?????? ??????</li>
                    <li>????????? ?????? ??????</li>
                    <li>????????? ?????? ??? ????????? ?????????</li>
                    <li>???????????? ?????? ????????? ?????????</li>
                    <li>???????????? ????????? ?????? ??????</li>
                    <li>All-in-one ?????? ?????? ??????</li>
                    <li>??????????????? ????????? ??????, GIF ??????</li>
                    <li>?????? ?????? ?????????</li>
                    <li>Facebook, Instrgram AR ?????? ??????</li>
                  </ul>
                </Grid>
                <Grid item md={3} xs={12} className={classes.PriceText}>
                  <Typography variant='body1' component='a' href="#/about">?????? ??????</Typography>
                </Grid>
              </Grid>
            </label>
          </RadioGroup>
        </FormControl>
      </Paper>
    </Container>
  )}

  // .MuiRadio-colorSecondary.Mui-checked