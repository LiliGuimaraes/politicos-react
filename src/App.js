import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {
  AppBar,
  Button,
  MuiThemeProvider,
  createMuiTheme,
  Toolbar,
  Typography,
} from 'material-ui'
import { withStyles } from 'material-ui/styles'

import defaultReducers from './defaultReducers'
import HTTPClient from './HTTPClient'
import PoliticiansList from './views/PoliticiansList'
import Filters from './views/Filters'

const myTheme = {
  palette: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#2962ff',
      contrastDefaultColor: 'light',
    },
  },
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
})

const App = props => {
  const rootReducers = combineReducers({
    ...defaultReducers,
  })
  const store = createStore(rootReducers, applyMiddleware(thunk))

  const theme = createMuiTheme(myTheme)

  const { classes } = props

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Typography color="inherit" type="title" className={classes.flex}>
                Candidatos políticos brasileiros
              </Typography>
              <Button color="contrast" href="http://politicos.olhoneles.org/">
                Voltar para o site Politicos API
              </Button>
            </Toolbar>
          </AppBar>
          <div>
            <Filters HTTPClient={HTTPClient} />
            <PoliticiansList HTTPClient={HTTPClient} />
          </div>
        </div>
      </MuiThemeProvider>
    </Provider>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App)
