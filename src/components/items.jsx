import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 450,
    margin: "50px auto",
    textAlign: "center",
    "&:hover": {
      transform: "translateY(-5px)"
    }
  },
  media: {
    height: 300
  }
};

const Items = props => {
  const { classes } = props;
  const { calories, label, image, totalWeight, totalTime } = props.recipe;

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={label} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {label}
            </Typography>
            <Typography gutterBottom variant="h6">
              Calories = {calories}
            </Typography>
            <Typography gutterBottom variant="h6">
              Total Weight = {totalWeight}
            </Typography>
            <Typography gutterBottom variant="h6">
              Time to Make = {totalTime}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(Items);
