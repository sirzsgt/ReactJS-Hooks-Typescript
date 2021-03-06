import React, { useState, useEffect } from "react";
import {
  Container,
  CircularProgress,
  Typography,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Technology } from "../models/technology";
import CardTechnology from "../components/card.component";

const useStyles = makeStyles(theme => ({
  center: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  grid: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  }
}));

const Home: React.FC = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [technologies, setTecnologies] = useState<Technology[]>([]);

  const fetching: Function = async () => {
    try {
      const response: Response = await fetch(
        "http://localhost:8080/technologies"
      );
      const data: Technology[] = await response.json();
      setTecnologies(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">{"Technologies"}</Typography>
      {loading ? (
        <div className={classes.center}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <Grid item xs={12}>
          <Grid container spacing={3} className={classes.grid}>
            {technologies.map((technology: Technology, i: number) => (
              <Grid item lg={4} xs={12} key={i}>
                <CardTechnology
                  id={technology._id}
                  name={technology.name}
                  description={technology.description}
                  logo={technology.logo}
                  tags={technology.tags}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Home;
