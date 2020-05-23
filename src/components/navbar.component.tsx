import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { RouteComponentProps, withRouter } from "react-router-dom";

type TitleProps = {
  title: string;
};

interface Button {
  pathname: string;
  title: string;
}

const BUTTONS: Button[] = [
  {
    pathname: "/",
    title: "Home"
  },
  {
    pathname: "/technologies",
    title: "Technologies"
  },
  {
    pathname: "/about",
    title: "About"
  }
];

type NavbarProps = TitleProps & RouteComponentProps;

const Navbar: React.FC<NavbarProps> = ({ title, history }) => {
  const [buttons, setButtons] = useState(BUTTONS);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      title: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      }
    })
  );

  const classes = useStyles();

  const navigate: Function = (pathname: string): void => {
    history.push(pathname);
    setButtons(buttons);
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            {title}
          </Typography>
          {buttons.map(({ pathname, title }, i: number) => (
            <Button
              key={i}
              className={classes.menuButton}
              color="inherit"
              onClick={() => navigate(pathname)}
            >
              {title}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withRouter(Navbar);
