import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/sass/main.css";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import LoginScreen from "./components/screens/LoginScreen";
import GlobalRoute from "./routes/GlobalRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Routes from "./routes/Routes";

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Routes/>
          {/* <Route exact path="/login" component={LoginScreen} /> */}

          {/* {auth.token ? <ProtectedRoutes /> : <AuthRoutes />} */}
          {/* <ProtectedRoutes /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
