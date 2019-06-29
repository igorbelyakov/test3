import React from "react";
import cn from "classnames";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SensorsTable } from "../SensorsTable";
import { SensorsParams } from "../SensorsParams";
import { SensorsCommonParams } from "../SensorsCommonParams";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    body1: {
      lineHeight: "15px",
    },
  },
  palette: { secondary: { main: "#FDC605" } },
});

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 30,
      paddingRight: "calc(100vw - 1200px)",
      width: "100vw",
      minWidth: "1200px",
      background: "rgb(244, 244, 244)",
      minHeight: "100vh",
      boxSizing: "border-box",
    },
    paper: {
      padding: 14, //theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    actions: {
      display: "flex",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const App = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <SensorsTable />
          </Grid>
          <Grid direction="column" spacing={3} item container xs={4}>
            <Grid item>
              <SensorsParams />
            </Grid>
            <Grid item>
              <SensorsCommonParams />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
