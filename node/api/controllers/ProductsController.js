// import { io as globalIO } from './socket/index.js';

const get = (req, res) => {
  const io = global.io;
  const message = req.query.message;
  const id = req.query.id;
  const room = io.of("/room1");
  room.to(id).emit("message", message);
  res.json("Đã gửi: " + message + "id : " + id);
};

// export const detail = (req, res) => {
//   let sql = 'SELECT * FROM products WHERE id = ?';
//   db.query(sql, [req.params.productId], (err, response) => {
//     if (err) throw err;
//     res.json(response[0]);
//   });
// };

// export const update = (req, res) => {
//   let data = req.body;
//   let productId = req.params.productId;
//   let sql = 'UPDATE products SET ? WHERE id = ?';
//   db.query(sql, [data, productId], (err, response) => {
//     if (err) throw err;
//     res.json({ message: 'Update success!' });
//   });
// };

// export const store = (req, res) => {
//   let data = req.body;
//   let sql = 'INSERT INTO products SET ?';
//   db.query(sql, [data], (err, response) => {
//     if (err) throw err;
//     res.json({ message: 'Insert success!' });
//   });
// };

// export const delete = (req, res) => {
//   let sql = 'DELETE FROM products WHERE id = ?';
//   db.query(sql, [req.params.productId], (err, response) => {
//     if (err) throw err;
//     res.json({ message: 'Delete success!' });
//   });
// };

const ProductsController = {
  get,
};

export default ProductsController;
