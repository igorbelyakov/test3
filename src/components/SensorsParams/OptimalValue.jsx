import React from "react";
import cn from "classnames";

import * as yup from "yup";
import { Formik } from "formik";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Toolbar from "@material-ui/core/Toolbar";

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
    expandOpen: {
      transform: "rotate(180deg)",
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
    fieldInput: {
      fontSize: 12,
    },
  }),
);

const validationSchema = yup.object().shape({
  recomendedVal: yup
    .number()
    .typeError("должно быть числом")
    .min(-10)
    .max(+30),
});

export const OptimalValue = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <Formik
      initialValues={{
        recomendedVal: 15,
      }}
      validationSchema={validationSchema}
      validateOnChange
      render={({ values, errors, handleChange }) => (
        <>
          <Toolbar className={classes.toolbar}>
            <Typography color="textPrimary" className={classes.header}>
              Оптимальное значение*
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
            <>
              <List className={classes.list}>
                <ListItem>
                  <TextField
                    color="textPrimary"
                    value={values.recomendedVal}
                    error={Boolean(errors.recomendedVal)}
                    onChange={handleChange}
                    name="recomendedVal"
                    helperText="от -10 до +30 °С"
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
                  <Typography color="textSecondary" className={classes.subText}>
                    * При изменении значения на ±20% от оптимального
                    пользователь получает уведомление об ошибке
                  </Typography>
                </ListItem>
              </List>
              <Divider />
              <p className={classes.bottomDevider} />
            </>
          )}
        </>
      )}
    />
  );
};
