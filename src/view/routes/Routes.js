import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Main from "../pages/Main/Main";
import AuthContainer from "../Container/AuthContainer";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={Main} />
            <Route path={"/login"} component={AuthContainer} />
        </Switch>
    );
};

export default Routes;
