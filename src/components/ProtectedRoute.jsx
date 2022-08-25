import { useAuth } from '../contexts/Auth'
import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useToast } from '../contexts/ToastState';

const ProtectedRoute = (props) => {
  const { setToastState } = useToast();
  //TODO
  const { user } = useAuth();
  const history = useHistory();
  if(user.loggedIn){
    return <Route path={props.path} key={props.key} component={props.component} />
  }
  else{
    setToastState({ title: "2" , description: "First, log in to your account"});
    history.push("/login");
  }
  return <>

  </>
}

export default ProtectedRoute
