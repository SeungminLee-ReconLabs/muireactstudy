import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function CopyrightComponent(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://plicar.io">
        PlicAR
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default  CopyrightComponent