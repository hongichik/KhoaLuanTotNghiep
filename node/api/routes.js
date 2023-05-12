"use strict";

import SocketController from "./controllers/SocketController.js";

export default function routes(app) {
  // todoList Routes
  app.route("/").get((req, res) => {
    
    res.sendFile(new URL('./index.html', import.meta.url).pathname);
  });
  app.route("/products").post(SocketController.post);
};
