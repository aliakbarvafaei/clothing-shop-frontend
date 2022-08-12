// import { Footer, Header, ProtectedRoute, Sidebar } from '../components'
import Header from '../components/Header/Header'
import MainMenu from '../components/mainMenu/mainMenu'
import React from 'react'
import {  Route, Switch  } from 'react-router-dom'
import AppRoutes from '../routes'
import ProtectedRoute from '../components/ProtectedRoute'
import Banner from '../components/Banner/Banner'
import SectionCategories from '../components/SectionCategories/SectionCategories'

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
      <Header />
      <MainMenu />
      <Banner />
      <SectionCategories />
      {/* <Sidebar {...props} routes={AppRoutes} /> */}
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Switch >
            {AppRoutes.map((prop, key) => {
              if(prop.private)
                return <ProtectedRoute path={prop.path} key={key} component={prop.component} />
              else{
                return ( <Route path={prop.path} key={key} component={prop.component} />)
              }
            })}
          </Switch >
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
