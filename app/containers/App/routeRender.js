import React from "react";
import { Switch, Route } from "react-router-dom";
import Test from "../pages/Test";

function Routes() {
      const routes = [
            {
                  path: "/routerXX",
                  exact: true,
                  component: RouterXX,
            },
            {
                  path: "/",
                  exact: true,
                  component: Test,
            },
            {
                  path: "*",
                  component: Error404,
            },
      ];

      return (
            <Switch>
                  {routes.map((route) => (
                        <Route {...route} />
                  ))}
            </Switch>
      );
}

function RouterXX() {
      return <h2>routerXX</h2>;
}
function Error404() {
      return <h2>ты ошибся этажем друг</h2>;
}

export default Routes;
