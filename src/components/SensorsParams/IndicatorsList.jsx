import React from "react";
import cn from "classnames";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMore from "@material-ui/icons/ExpandMore";
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
    button: {
      padding: 8,
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    header: {
      fontSize: 14,
      fontWeight: 500,
    },
  }),
);

export const IndicatorsList = ({ currentFull }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const toggleExpanded = () => setExpanded(!expanded);
  console.log(currentFull);
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography color="textPrimary" className={classes.header}>
          Показатели датчика
        </Typography>
        <div className={classes.toolbarDelim} />
        <IconButton
          onClick={toggleExpanded}
          className={cn(classes.button, { [classes.expandOpen]: expanded })}
        >
          <ExpandMore />
        </IconButton>
      </Toolbar>

      {expanded && (
        <List>
          <IndicatorItem
            current
            property="Текущее значение"
            value={currentFull.indicator}
          />
          <IndicatorItem property="Диаппазон" value="от -10 до +30 °С" />
          <IndicatorItem property="Мин. значение" value="-5 °С" />
          <IndicatorItem property="Макс. значение" value="+15 °С" />
        </List>
      )}
    </>
  );
};
