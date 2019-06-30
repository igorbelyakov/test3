import React from "react";
import cn from "classnames";
import { IndicatorsList } from "./IndicatorsList";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MoreVert from "@material-ui/icons/MoreVert";
import Toolbar from "@material-ui/core/Toolbar";
import { OptimalValue } from "./OptimalValue";

import { getTypeData } from "../../helpers/types";

const useStyles = makeStyles(theme => {
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
    expandOpen: {
      transform: "rotate(180deg)",
    },
  });
});

export const SensorsParams = ({ currentFull }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const toggleExpanded = () => setExpanded(!expanded);

  if (!currentFull) return null;

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
        <IconButton
          onClick={toggleExpanded}
          className={cn(classes.button, { [classes.expandOpen]: expanded })}
        >
          <ExpandMore />
        </IconButton>
      </Toolbar>
      {expanded && (
        <>
          <Divider />

          <Toolbar className={classes.toolbar}>
            <img
              className={classes.cellTypeIcon}
              src={getTypeData(currentFull.type).icon}
              alt={getTypeData(currentFull.type).title}
            />
            <Typography className={classes.sensorValue}>
              {getTypeData(currentFull.type).title}
            </Typography>
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
        </>
      )}
    </Paper>
  );
};
