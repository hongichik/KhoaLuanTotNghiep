"use strict";

import ProductsController from "./controllers/ProductsController.js";

export default function routes(app) {
  // todoList Routes
  app.route("/").get((req, res) => {
    
    res.sendFile(new URL('./index.html', import.meta.url).pathname);
  });
  app.route("/products").get(ProductsController.get);
  //   .post(productsCtrl.store);

  // app.route('/products/:productId')
  //   .get(productsCtrl.detail)
  //   .put(productsCtrl.update)
  //   .delete(productsCtrl.delete);
};
