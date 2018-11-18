/*
 * Copyright (c) 2017, Marcelo Jorge Vieira <metal@alucinados.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from "react";
import PropTypes from "prop-types";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Filters from "./views/Filters";
import PoliticiansList from "./views/PoliticiansList";
import defaultReducers from "./defaultReducers";
import HTTPClient from "./HTTPClient";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#fafafa"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  }
});

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = props => {
  const { classes } = props;
  const rootReducers = combineReducers({
    ...defaultReducers
  });
  const store = createStore(rootReducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Candidatos políticos brasileiros
              </Typography>
              <Button color="inherit" href="http://politicos.olhoneles.org/">
                Voltar para o site Politicos API
              </Button>
            </Toolbar>
          </AppBar>
          <Filters HTTPClient={HTTPClient} />
          <PoliticiansList HTTPClient={HTTPClient} />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
