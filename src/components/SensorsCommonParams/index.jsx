import React from "react";
import cn from "classnames";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme =>
  createStyles({
    headerToolbar: {
      padding: "0 14px",
      minHeight: "59px !important",
    },
    toolbar: {
      padding: "0 14px",
      minHeight: "52px !important",
    },
    button: {
      padding: 8,
    },
    header: {
      fontSize: 14,
      fontWeight: 500,
    },
    toolbarDelim: {
      flexGrow: 1,
    },
    footerToolbar: {
      justifyContent: "space-evenly",
    },
    field: {
      width: "100%",
    },
    fieldInput: {
      fontSize: 12,
    },
  }),
);

export const SensorsCommonParams = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Toolbar className={classes.headerToolbar}>
        <Typography color="textPrimary" className={classes.header}>
          Общие параметры
        </Typography>
        <div className={classes.toolbarDelim} />
        <IconButton className={classes.button}>
          <ExpandMore />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItem>
          <TextField
            label="ID устройства"
            className={classes.field}
            value="88888"
            margin="normal"
            color="textPrimary"
            InputLabelProps={{
              classes: {
                root: classes.fieldInput,
              },
            }}
            InputProps={{
              classes: {
                input: classes.fieldInput,
              },
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            color="textPrimary"
            value="dver"
            select
            label="Тип датчика"
            className={classes.field}
            InputLabelProps={{
              classes: {
                root: classes.fieldInput,
              },
            }}
            InputProps={{
              classes: {
                input: classes.fieldInput,
              },
            }}
          >
            <MenuItem value={"osvesh"}>Датчик освещённости</MenuItem>
            <MenuItem value={"dver"}>Датчик двери</MenuItem>
            <MenuItem value={"temp"}>Датчик температуры</MenuItem>
            <MenuItem value={"vlashn"}>Датчик влажности</MenuItem>
            <MenuItem value={"dim"}>Датчик дыма</MenuItem>
            <MenuItem value={"schetch"}>Счётчик</MenuItem>
          </TextField>
        </ListItem>
      </List>
      <Divider />
      <Toolbar className={cn(classes.footerToolbar, classes.toolbar)}>
        <Button color="textSecondary">Отмена</Button>
        <Button color="secondary">Соxранить</Button>
      </Toolbar>
    </Paper>
  );
};
