import React from "react";

import { Container, CssBaseline } from "@material-ui/core";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";

import { routes } from "./data/routes";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar title={"Technologies"} />
        <Switch>
          {routes.map(
            ({ pathname, component: Component, exact }, i: number) => (
              <Route
                key={i}
                exact={exact}
                path={pathname}
                render={props => (
                  <Container>
                    <Component {...props} />
                  </Container>
                )}
              />
            )
          )}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
