// import { Footer, Header, ProtectedRoute, Sidebar } from '../components'
import Header from '../components/Header/Header'
import MainMenu from '../components/mainMenu/MainMenu'
import React from 'react'
import { Redirect, Route, Switch  } from 'react-router-dom'
import AppRoutes from '../routes'
import ProtectedRoute from '../components/ProtectedRoute'
import Footer from '../components/Footer/Footer'
import FixedButtonRight from '../components/FixedButtonRight/FixedButtonRight'
import MobileMenu from '../components/MobileMenu/MobileMenu'

const DefaultLayout = (props) => {
  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <FixedButtonRight />
      <Header />
      <MainMenu />
      <MobileMenu />
      {/* <Sidebar {...props} routes={AppRoutes} /> */}
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Switch >
            {AppRoutes.map((prop, key) => {
              if(prop.redirect===true)
                return <Redirect to={prop.pathTo} key={key}/>
              if(prop.private)
                return <ProtectedRoute path={prop.path} key={key} component={prop.component} />
              else{
                return ( <Route path={prop.path} key={key} component={prop.component} />)
              }
            })}
          </Switch >
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
