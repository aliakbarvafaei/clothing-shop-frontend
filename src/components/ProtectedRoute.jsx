import { useAuth } from '../contexts/Auth'
import React from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'

const ProtectedRoute = (props) => {
  //TODO
  const { toggleAuth, user } = useAuth();
  const history = useHistory();
  if(user.loggedIn){
    return <Route path={props.path} key={props.key} component={props.component} />
  }
  else{
    history.push("/login");
  }
  return <>

  </>
}

export default ProtectedRoute
