import React from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { useToast } from "../contexts/ToastState";

const ProtectedRoute = (props) => {
  const { setToastState } = useToast();
  const { user } = useSelector((state) => state.userAuth);
  const history = useHistory();
  function addItemOnce(arr, value) {
    arr.push(value);
    return arr;
  }
  if (user) {
    return (
      <Route path={props.path} key={props.key} component={props.component} />
    );
  } else {
    const value = localStorage.getItem("token_user");
    if (JSON.parse(value) === "") {
      setToastState((old) =>
        addItemOnce(old.slice(), {
          title: "2",
          description: "First, log in to your account",
          key: Math.random(),
        })
      );
    }
    history.push("/login");
  }
  return <></>;
};

export default ProtectedRoute;
