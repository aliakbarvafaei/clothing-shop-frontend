import './assets/scss/style.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.rtl.min.css' 
import "./index.css"
import { AuthProvider } from './contexts/Auth'
import { ThemeProvider } from './contexts/theme'
import { ToastProvider } from './contexts/ToastState';
import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import { indexRoutes } from './routes'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Provider } from 'react-redux';
import { store } from './redux/store.js'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        {/* <AuthProvider> */}
          <ToastProvider>
            <Switch >
              <TransitionGroup timeout={300} classNames="fade">
                {indexRoutes.map((prop, key) => {
                  return (
                    <CSSTransition timeout={300} classNames="fade" key={key}>
                      <Route
                        path={prop.path}
                        key={key}
                        component={prop.component}
                      />
                    </CSSTransition>
                  )
                })}
              </TransitionGroup>
            </Switch >
          </ToastProvider>
        {/* </AuthProvider> */}
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)

export default App
