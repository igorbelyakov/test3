import React from "react";
import cn from "classnames";
import { IndicatorsList } from "./IndicatorsList";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MoreVert from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { OptimalValue } from "./OptimalValue";

const useStyles = makeStyles(theme => {
  console.dir(theme);
  return createStyles({
    headerToolbar: {
      padding: "0 14px",
      minHeight: "59px !important",
    },
    toolbar: {
      padding: "0 14px",
      minHeight: "52px !important",
    },
    sensorId: {
      fontSize: 20,
      fontWeight: 500,
    },
    sensorValue: {
      fontSize: 12,
      marginLeft: 23,
    },
    someValue: {
      fontSize: 12,
      fontWeight: 500,
    },
    toolbarDelim: {
      flexGrow: 1,
    },
    button: {
      padding: 8,
    },
  });
});

export const SensorsParams = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Toolbar className={classes.headerToolbar}>
        <Typography className={classes.sensorId}>1321321</Typography>
        <Typography className={classes.sensorValue} color="textSecondary">
          +10 °С
        </Typography>
        <div className={classes.toolbarDelim} />
        <IconButton className={classes.button}>
          <MoreVert />
        </IconButton>
        <IconButton className={classes.button}>
          <ExpandMore />
        </IconButton>
      </Toolbar>
      <Divider />

      <Toolbar className={classes.toolbar}>
        <MenuIcon />
        <Typography className={classes.sensorValue}>Температура</Typography>
        <div className={classes.toolbarDelim} />
        <Switch checked={true} />
      </Toolbar>
      <Divider />

      <Toolbar className={classes.toolbar}>
        <Typography className={classes.someValue} color="secondary">
          123456
        </Typography>
        <Typography className={classes.sensorValue} color="textSecondary">
          SW1
        </Typography>
        <div className={classes.toolbarDelim} />
        <IconButton className={classes.button}>
          <MoreVert />
        </IconButton>
      </Toolbar>
      <Divider />
      <IndicatorsList />
      <Divider />
      <OptimalValue />
      {/*<CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={cn(classes.expand, {
            [classes.expandOpen]: true,
          })}
          aria-expanded={true}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
        </Collapse>*/}
    </Paper>
  );
};
