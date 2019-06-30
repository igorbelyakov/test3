import React from "react";
import cn from "classnames";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { getTypeData } from "../../helpers/types";

const useStyles = makeStyles(theme =>
  createStyles({
    cellTypeIcon: {
      verticalAlign: "middle",
      marginRight: 13,
    },
    cellType: {
      textAlign: "left",
    },
    checkboxLabel: {
      marginLeft: 6,
    },
    cell: {
      paddingTop: 4.5,
      paddingBottom: 5,
      padding: "4.5px 11px 5px 11px",

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
  }),
);

export const SensorRow = ({ current, id, type, device, indicator, select }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.cell} component="th" scope="row">
        <FormControlLabel
          control={<Checkbox value="checkedF" />}
          checked={current === id}
          onChange={select}
          label={
            <Typography
              className={cn(classes.checkboxLabel, classes.cellTextBig)}
            >
              {id}
            </Typography>
          }
        />
      </TableCell>
      <TableCell className={cn(classes.cell, classes.cellType)} align="right">
        <Typography className={classes.cellTextLil}>
          <img
            className={classes.cellTypeIcon}
            src={getTypeData(type).icon}
            alt={getTypeData(type).title}
          />
          {getTypeData(type).title}
        </Typography>
      </TableCell>
      <TableCell className={classes.cell} align="right">
        <Typography className={classes.cellTextLil} color="secondary">
          {id}
        </Typography>
        <Typography className={classes.cellTextLil}>{device}</Typography>
      </TableCell>
      <TableCell className={classes.cell} align="right">
        <Typography className={classes.cellTextLil} color="secondary">
          карта
        </Typography>
      </TableCell>
      <TableCell className={classes.cell} align="right">
        <Typography className={classes.cellTextBig}>{indicator}</Typography>
      </TableCell>
    </TableRow>
  );
};
