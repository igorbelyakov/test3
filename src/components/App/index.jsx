import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SensorsTable } from "../SensorsTable";
import { SensorsParams } from "../SensorsParams";
import { SensorsCommonParams } from "../SensorsCommonParams";

import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    body1: {
      lineHeight: "15px",
    },
  },
  palette: {
    background: { default: "#F4F4F4" },
    secondary: { main: "#FDC605" },
    text: { secondary: "#21212150" },
  },
});

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 30,
      background: theme.palette.background.default,
      minHeight: "100vh",
      boxSizing: "border-box",

      display: "grid",
      gridGap: 15,
      gridTemplateColumns: "672px 317px",
      gridTemplateRows: "max-content min-content",
      gridTemplateAreas: '"a b" "a c"',
    },
    rightTopCol: {
      gridArea: "b",
    },
    rightBtmCol: {
      gridArea: "c",
    },
    leftCol: {
      gridArea: "a",
    },
  }),
);

const App = ({ create, select, edit, sensors, current, currentFull }) => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.leftCol}>
          <SensorsTable
            current={current}
            create={create}
            select={select}
            sensors={sensors}
          />
        </div>
        <div className={classes.rightTopCol}>
          <SensorsParams currentFull={currentFull} />
        </div>
        <div className={classes.rightBtmCol}>
          <SensorsCommonParams currentFull={currentFull} edit={edit} />
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
