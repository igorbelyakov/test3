import React from "react";
import cn from "classnames";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Formik } from "formik";
import * as yup from "yup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { typeData } from "../../helpers/types";

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
    expandOpen: {
      transform: "rotate(180deg)",
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

const validationSchema = yup.object().shape({
  id: yup
    .number()
    .typeError("должно быть числом")
    .positive("должно быть положительным числом"),
});

export const SensorsCommonParams = ({ currentFull, edit }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  if (!currentFull) return null;

  return (
    <Formik
      initialValues={{
        id: currentFull.id,
        type: currentFull.type,
      }}
      validationSchema={validationSchema}
      onSubmit={data => edit(currentFull.id, data)}
      validateOnChange={false}
      render={({ values, errors, handleChange, handleSubmit, handleReset }) => (
        <Paper className={classes.card}>
          <Toolbar className={classes.headerToolbar}>
            <Typography color="textPrimary" className={classes.header}>
              Общие параметры
            </Typography>
            <div className={classes.toolbarDelim} />
            <IconButton
              onClick={toggleExpanded}
              className={cn(classes.button, { [classes.expandOpen]: expanded })}
            >
              <ExpandMore />
            </IconButton>
          </Toolbar>
          <Divider />
          {expanded && (
            <>
              <List>
                <ListItem>
                  <TextField
                    label="ID устройства"
                    className={classes.field}
                    value={values.id}
                    error={Boolean(errors.id)}
                    onChange={handleChange}
                    name="id"
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
                    value={values.type}
                    error={Boolean(errors.type)}
                    onChange={handleChange}
                    select
                    name="type"
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
                    {" "}
                    {typeData.map(td => (
                      <MenuItem value={td.key} key={td.key}>
                        {td.selectorTitle}
                      </MenuItem>
                    ))}
                  </TextField>
                </ListItem>
              </List>
              <Divider />
              <Toolbar className={cn(classes.footerToolbar, classes.toolbar)}>
                <Button onClick={handleReset} color="textSecondary">
                  Отмена
                </Button>
                <Button onClick={handleSubmit} color="secondary">
                  Соxранить
                </Button>
              </Toolbar>
            </>
          )}
        </Paper>
      )}
    />
  );
};
