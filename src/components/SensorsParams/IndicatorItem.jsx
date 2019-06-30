import React from "react";
import cn from "classnames";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme =>
  createStyles({
    listItem: {
      display: "flex",
      padding: "7.5px 16px",
    },
    delim: {
      flexGrow: 1,
    },
    text: {
      fontWeight: 400,
      fontSize: 12,
    },
    current: {
      fontWeight: 600,
    },
  }),
);

export const IndicatorItem = ({ current, property, value }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <Typography className={cn(current && classes.current, classes.text)}>
        {property}
      </Typography>
      <div className={classes.delim} />
      <Typography className={cn(current && classes.current, classes.text)}>
        {value}
      </Typography>
    </ListItem>
  );
};
