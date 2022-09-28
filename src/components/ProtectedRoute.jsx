import { useAuth } from '../contexts/Auth'
import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useToast } from '../contexts/ToastState';

const ProtectedRoute = (props) => {
  const { setToastState } = useToast();
  //TODO
  const { user } = useAuth();
  const history = useHistory();
  function addItemOnce(arr, value) {
    arr.push(value);
    return arr;
  }
  if(user.loggedIn){
    return <Route path={props.path} key={props.key} component={props.component} />
  }
  else{
    setToastState(old => addItemOnce(old.slice(),{ title: "2" , description: "First, log in to your account", key:Math.random()}));
    history.push("/login");
  }
  return <>

  </>
}

export default ProtectedRoute
