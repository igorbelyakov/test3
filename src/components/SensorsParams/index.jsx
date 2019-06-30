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

export const SensorsParams = ({ currentFull }) => {
  const classes = useStyles();

  if (!currentFull) return null;

  console.log(currentFull);

  return (
    <Paper className={classes.card}>
      <Toolbar className={classes.headerToolbar}>
        <Typography className={classes.sensorId}>{currentFull.id}</Typography>
        <Typography className={classes.sensorValue} color="textSecondary">
          {currentFull.indicator}
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
        <Switch />
      </Toolbar>
      <Divider />

      <Toolbar className={classes.toolbar}>
        <Typography className={classes.someValue} color="secondary">
          {currentFull.id}
        </Typography>
        <Typography className={classes.sensorValue} color="textSecondary">
          {currentFull.device}
        </Typography>
        <div className={classes.toolbarDelim} />
        <IconButton className={classes.button}>
          <MoreVert />
        </IconButton>
      </Toolbar>
      <Divider />
      <IndicatorsList currentFull={currentFull} />
      <Divider />
      <OptimalValue />
    </Paper>
  );
};
