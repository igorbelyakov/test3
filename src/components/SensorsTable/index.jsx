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
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FilterList from "@material-ui/icons/FilterList";
import Search from "@material-ui/icons/Search";
import { SensorCell } from "./SensorCell";

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
    toolbar: {
      padding: "0 21px",
      minHeight: "52px !important",
    },
    addSensorButton: {
      justifyContent: "flex-start",
      height: 52,
      paddingLeft: 21,
      borderRadius: 0,
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

export const SensorsTable = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.toolbarCell} colSpan={5}>
              <Toolbar className={classes.headerToolbar}>
                <Typography
                  fontWeight={600}
                  color="textPrimary"
                  variant="h1"
                  className={classes.title}
                >
                  Датчики
                </Typography>
                <div className={classes.toolbarDelim} />
                <IconButton className={classes.button}>
                  <FilterList />
                </IconButton>
                <IconButton className={classes.button}>
                  <Search />
                </IconButton>
              </Toolbar>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={cn(classes.cell, classes.sortFilterHead)}>
              <FormControlLabel
                control={<Checkbox value="checkedF" />}
                label={
                  <Typography
                    variant="p"
                    className={cn(classes.checkboxLabel, classes.sortFilter)}
                  >
                    ID
                  </Typography>
                }
              />
            </TableCell>
            <TableCell
              className={cn(classes.cell, classes.sortFilterHead)}
              align="right"
            >
              <TableSortLabel
                classes={{
                  active: classes.sortFilter,
                  icon: classes.sortFilter,
                }}
                className={classes.sortFilter}
                active
                direction="asc"
                IconComponent={ArrowDropDown}
              >
                Тип
              </TableSortLabel>
            </TableCell>
            <TableCell
              className={cn(classes.cell, classes.sortFilterHead)}
              align="right"
            >
              <TableSortLabel
                classes={{
                  active: classes.sortFilter,
                  icon: classes.sortFilter,
                }}
                className={classes.sortFilter}
                active
                direction="desc"
                IconComponent={ArrowDropDown}
              >
                Устройство
              </TableSortLabel>
            </TableCell>
            <TableCell
              className={cn(classes.cell, classes.sortFilterHead)}
              align="right"
            >
              <TableSortLabel
                classes={{
                  active: classes.sortFilter,
                  icon: classes.sortFilter,
                }}
                className={classes.sortFilter}
                active
                direction="asc"
                IconComponent={ArrowDropDown}
              >
                Положение
              </TableSortLabel>
            </TableCell>
            <TableCell
              className={cn(classes.cell, classes.sortFilterHead)}
              align="right"
            >
              <TableSortLabel
                classes={{
                  active: classes.sortFilter,
                  icon: classes.sortFilter,
                }}
                className={classes.sortFilter}
                active
                direction="desc"
                IconComponent={ArrowDropDown}
              >
                Показатель
              </TableSortLabel>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.toolbarCell} colSpan={5}>
              <Button
                color="secondary"
                fullWidth
                className={classes.addSensorButton}
              >
                <MenuIcon />
                <Typography
                  color="secondary"
                  variant="p"
                  className={classes.addSensor}
                >
                  Добавить датчик
                </Typography>
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <SensorCell
            id="478569"
            type="type"
            device="SDE-r"
            indicator="открыто"
          />
          <SensorCell
            id="478569"
            type="type"
            device="SDE-r"
            indicator="открыто"
          />
          <SensorCell
            id="478569"
            type="type"
            device="SDE-r"
            indicator="открыто"
          />
          <SensorCell
            id="478569"
            type="type"
            device="SDE-r"
            indicator="открыто"
          />
          <SensorCell
            id="478569"
            type="type"
            device="SDE-r"
            indicator="открыто"
          />
          <SensorCell
            id="478569"
            type="type"
            device="SDE-r"
            indicator="открыто"
          />
        </TableBody>
      </Table>
    </Paper>
  );
};
