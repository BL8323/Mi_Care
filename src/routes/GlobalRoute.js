import React from "react";
import { Route, Redirect } from "react-router-dom";

const GlobalRoute = ({ children, ...rest }) => {
  const isAuth = !JSON.parse(localStorage.getItem("persist:root"));

  console.log(isAuth, "isauth===>>>");
  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to={"/"} />)}
    />
  );
};

export default GlobalRoute;
