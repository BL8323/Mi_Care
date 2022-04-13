import React from "react";
import PrivateRoute from "./PrivateRoute";
import GlobalRoute from "./GlobalRoute";
import LoginScreen from "../components/screens/LoginScreen";
import { Switch } from "react-router-dom";
import DashboardScreen from "../components/screens/DashboardScreen";
import ResidentAnalysisScreen from "../components/screens/ResidentAnalysisScreen";
// import Dummy from "../components/screens/Dummy";
import SignUpScreen from "../components/screens/SignUpScreen";
import HomeScreen from "../components/screens/HomeScreen";
import BaseLayout from "../components/layouts/BaseLayout";

const Routes = () => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    document.title = `${title} - Mi Care`;
  }, [title]);
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/dashboard">
          <BaseLayout title={title}>
            <DashboardScreen />
          </BaseLayout>
        </PrivateRoute>

        <PrivateRoute exact path="/resident-analysis">
          <BaseLayout title={title}>
            <ResidentAnalysisScreen />
          </BaseLayout>
        </PrivateRoute>

        {/* <PrivateRoute exact path="/dummy">
          <Dummy />
        </PrivateRoute> */}

        <PrivateRoute exact path="/">
          <BaseLayout title={title}>
            <HomeScreen />
          </BaseLayout>
        </PrivateRoute>

        <GlobalRoute exact path="/login">
          <LoginScreen />
        </GlobalRoute>

        <GlobalRoute exact path="/signup">
          <SignUpScreen />
        </GlobalRoute>
      </Switch>
    </>
  );
};

export default Routes;
