import React from "react";
import cn from "classnames";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
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
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { IndicatorItem } from "./IndicatorItem";

const useStyles = makeStyles(theme =>
  createStyles({
    toolbar: {
      padding: "0 14px",
      minHeight: 48,
    },
    toolbarDelim: {
      flexGrow: 1,
    },
    list: {
      paddingTop: 0,
    },
    button: {
      padding: 8,
    },
    header: {
      fontSize: 14,
      fontWeight: 500,
    },
    subText: {
      fontSize: 10,
    },
    bottomDevider: {
      height: 16,
      margin: 0,
    },
  }),
);

export const OptimalValue = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography color="textPrimary" className={classes.header}>
          Оптимальное значение*
        </Typography>
        <div className={classes.toolbarDelim} />
        <IconButton className={classes.button}>
          <ExpandMore />
        </IconButton>
      </Toolbar>
      <List className={classes.list}>
        <ListItem>
          <TextField
            color="textPrimary"
            defaultValue={15}
            helperText="от -10 до +30 °С"
          />
        </ListItem>
        <ListItem>
          <Typography
            color="textSecondary"
            variant="p"
            className={classes.subText}
          >
            * При изменении значения на ±20% от оптимального пользователь
            получает уведомление об ошибке
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <p className={classes.bottomDevider} />
    </>
  );
};
