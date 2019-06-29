import React from "react";
import cn from "classnames";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "100%",
      minHeight: "100%",
      overflowX: "hidden",
    },
    title: {
      fontSize: 20,
      fontWeight: "600",
    },
    addSensor: {
      marginLeft: 15,
      fontSize: 14,
      fontWeight: "500",
    },
    headerToolbar: {
      padding: "0 21px",
      minHeight: "59px !important",
    },
    cellTypeIcon: {
      verticalAlign: "middle",
      marginRight: 13,
    },
    table: {
      maxWidth: "100%",
    },
    toolbarDelim: {
      flexGrow: 1,
    },
    toolbarCell: {
      padding: "0 !important",
    },
    cellType: {
      textAlign: "left",
    },
    checkboxLabel: {
      marginLeft: 6,
    },
    sortFilterHead: {
      lineHeight: "13px",
      paddingTop: 4.5,
      paddingBottom: 5,
    },
    sortFilter: {
      color: `${theme.palette.text.secondary} !important`,
      fontSize: 10,
      fontWeight: "500",
    },
    cell: {
      paddingTop: 4.5,
      paddingBottom: 5,

      "&:first-child": {
        paddingLeft: 21,
      },
      "&:last-child": {
        paddingRight: 21,
      },
    },
    cellTextBig: {
      fontSize: 12,
      fontWeight: "500",
    },
    cellTextLil: {
      fontSize: 10,
      fontWeight: "500",
    },
    cellDevice: {
      flexDirection: "column",
      display: "flex",
      justifyContent: "space-around",
      boxSizing: "border-box",
      height: 53,
      marginBottom: -1,
    },
    listItemIcon: { minWidth: 24 },
  }),
);

export const SensorCell = ({ id, type, device, indicator }) => {
  const classes = useStyles();

  return (
    <TableRow key={"aa"}>
      <TableCell className={classes.cell} component="th" scope="row">
        <FormControlLabel
          control={<Checkbox value="checkedF" />}
          label={
            <Typography
              variant="p"
              className={cn(classes.checkboxLabel, classes.cellTextBig)}
            >
              {id}
            </Typography>
          }
        />
      </TableCell>
      <TableCell className={cn(classes.cell, classes.cellType)} align="right">
        <Typography variant="p" className={classes.cellTextLil}>
          <MenuIcon className={classes.cellTypeIcon} />
          {type}
        </Typography>
      </TableCell>
      <TableCell className={cn(classes.cell, classes.cellDevice)} align="right">
        <Typography
          variant="p"
          className={classes.cellTextLil}
          color="secondary"
        >
          {id}
        </Typography>
        <Typography variant="p" className={classes.cellTextLil}>
          {device}
        </Typography>
      </TableCell>
      <TableCell className={classes.cell} align="right">
        <Typography
          variant="p"
          className={classes.cellTextLil}
          color="secondary"
        >
          карта
        </Typography>
      </TableCell>
      <TableCell className={classes.cell} align="right">
        <Typography variant="p" className={classes.cellTextBig}>
          {indicator}
        </Typography>
      </TableCell>
    </TableRow>
  );
};
