import * as React from "react";
import {} from "@material-ui/core";
import { Button, Container, Stepper, Step, StepLabel } from "@material-ui/core";

const steps = [
  "Videos",
  "Modeling",
  "Post Processing",
  "Under Review",
  "Delivered",
  "Published",
];

const urlToStep = {
  videos: 0,
  modeling: 1,
  postprocessing: 2,
  underreview: 3,
  delivered: 4,
  published: 5,
};

function getStepContent(step) {
  console.log(step, "💛💛💛💛💛");
  switch (step) {
    case 0:
      console.log(0);
      break;
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    case 3:
      console.log(3);
      break;
    case 4:
      console.log(4);
      break;
    case 5:
      console.log(5);
      break;
    default:
      console.log(1, "없는 단계");
    // throw new Error('Unknown step');
  }
}

export default function ProcessNavigatorAndManager({ plmProcessStep }) {
  // 스텝 이동 버튼
  const [activeStep, setActiveStep] = React.useState(urlToStep[plmProcessStep]);
  const handleNext = () => {};
  const handleBack = () => {};

  return (
    <>
      {/* AppBar, CSSBaseline 있던 곳 */}
      <Container component="main" maxWidth="1" sx={{ mb: 4 }}>
        <Stepper
          activeStep={activeStep}
          sx={{
            pt: 3,
            pb: 5,
            overflow: "auto",
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Button onClick={handleNext} sx={{ mr: 1 }}>
          Next{" "}
        </Button>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back{" "}
        </Button>
        {/* Navigator의 단계에 따라서 따라서, 이녀석만 계속 바꾸어주면 된다 */}
        {getStepContent(activeStep)}
      </Container>
    </>
  );
}
