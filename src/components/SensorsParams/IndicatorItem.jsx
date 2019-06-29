import React from "react";
import cn from "classnames";

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
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

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
