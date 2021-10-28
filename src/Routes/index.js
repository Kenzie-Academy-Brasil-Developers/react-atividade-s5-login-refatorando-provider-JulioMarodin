import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { useAuth } from "../Components/Providers/Auth";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const Routes = () => {
  const { authToken } = useAuth();
  return (
    <Switch>
      <Route exact path="/">
        {!!authToken ? <Redirect to="/dashboard" /> : ""}
        <Login />
      </Route>
      <Route path="/dashboard">
        {!authToken ? <Redirect to="/" /> : ""}
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
