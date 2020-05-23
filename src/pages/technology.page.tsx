import React, { useState, useEffect } from "react";
import {
  Container,
  CircularProgress,
  Typography,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Technology } from "../models/technology";
import { useParams } from "react-router-dom";
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

const TechnologyID: React.FC<Technology> = props => {
  const { tech_id } = useParams();
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [technology, setTecnology] = useState<Technology>({
    _id: props._id,
    name: props.name,
    description: props.description,
    logo: props.logo,
    tags: props.tags,
    createdAt: props.createdAt,
    updatedAt: props.updatedAt
  });

  const fetching: Function = async (id: string) => {
    try {
      const response: Response = await fetch(
        "http://localhost:8080/technology/" + id
      );
      const data: Technology = await response.json();
      setTecnology(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching(tech_id);
  }, [tech_id]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">{"Technology"}</Typography>
      {loading ? (
        <div className={classes.center}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <Grid item xs={12}>
          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={12}>
              <CardTechnology
                id={technology._id}
                name={technology.name}
                description={technology.description}
                logo={technology.logo}
                tags={technology.tags}
              />
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default TechnologyID;
