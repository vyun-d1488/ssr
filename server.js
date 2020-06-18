import "babel-polyfill";

import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import { parse as parseUrl } from "url";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

const app = express();

app.use(express.static("./build"));

app.get("*", (req, res) => {
      const url = req.originalUrl || req.url;
      const context = {};
      const location = parseUrl(url);

      const indexFile = path.resolve("./build/main.html");
      if (context.url) {
            req.header("Location", context.url);
            return res.send(302);
      }
      const appContent = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}></StaticRouter>
      );
      fs.readFile(indexFile, "utf8", (err, data) => {
            if (err) {
                  console.log("Something went wrong:", err);
                  return res.status(500).send("Oops, better luck next time!");
            }
            data = data.replace("__LOADER__", "");
            data = data.replace(
                  "<div id=app></div>",
                  `<div id=app>${appContent}</div>`
            );
            data = data.replace(
                  '<div id="app"></div>',
                  `<div id="app">${appContent}</div>`
            );

            return res.send(data);
      });
});

app.listen(3000, () => {
      console.log("Listenning on port: ", 3000);
});
