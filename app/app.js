import React from "react";
import { hydrate } from "react-dom";
import Routes from "./containers/App/routeRender";
import StaticRoutesConfig from "./containers/App/routes/StaticRoutes";
import { BrowserRouter } from "react-router-dom";

export const browserRender = () => {
      hydrate(
            <BrowserRouter>
                  <Routes />
            </BrowserRouter>,
            document.getElementById("app")
      );
};
