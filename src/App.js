import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./assets/sass/main.css";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

function App() {

  const auth = useSelector(state => state.auth);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* {auth.token ? <ProtectedRoutes /> : <AuthRoutes />} */}
          <ProtectedRoutes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
