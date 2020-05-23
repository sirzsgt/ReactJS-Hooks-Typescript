import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

import { RouteComponentProps, withRouter } from "react-router-dom";

type TechnologyProps = {
  id: string;
  name: string;
  description: string;
  logo: string;
  tags: string[];
};

type TechnologyCardProps = TechnologyProps & RouteComponentProps;

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  id,
  name,
  description,
  logo,
  tags,
  history
}) => {

  const open: Function = (id: string): void => {
    history.push("/technology/" + id)
  }

  return (
    <Card>
      <CardActionArea onClick={() => open(id)}>
        <CardMedia
          component="img"
          alt={name}
          height={"250"}
          image={logo}
          title={name}
          style={{ objectFit: "contain", marginTop: 10 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {tags.map((tag: string, i: number) => (
          <Button size="small" color="inherit" key={i}>
            {tag}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};

export default withRouter(TechnologyCard);
