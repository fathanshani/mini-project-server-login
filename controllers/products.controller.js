import Connection from "../config/db.js";
import crypto from "crypto";

export const getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  Connection.query(sql, (err, result) => {
    if (err) {
      return res.status(404).json({ message: "Produk tidak ditemukan" });
    }
    res.status(200).json({
      payload: result,
      message: "Tampilkan produk",
    });
  });
};

export const getProductById = (req, res) => {
  const para = req.params.id;
  const sql = `SELECT * FROM products WHERE id = '${para}'`;
  Connection.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    if (result.length == 0) {
      return res.status(404).json({ message: "Produk tidak ditemukan" });
    }
    res.status(200).json({
      payload: result,
      message: "Produk ditemukan",
    });
  });
};

export const createProduct = (req, res) => {
  let uuid = crypto.randomUUID();
  const { product_name, price, quantity, description, brand, category } =
    req.body;
  const sql = `INSERT INTO products (id, product_name, price, quantity, brand, category, description) VALUES ('${uuid}', '${product_name}', ${price}, ${quantity}, '${brand}', '${category}', '${description}')`;
  Connection.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    if (result?.affectedRows) {
      res.status(200).json({
        code: 200,
        status: "OK",
        message: "Berhasil menambahkan produk",
      });
    }
  });
};

export const updateProduct = (req, res) => {};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM products WHERE id = '${id}';`;
  Connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        code: 500,
        status: "INTERNAL_SERVER_ERROR",
        message: err,
      });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({
        code: 404,
        status: "NOT_FOUND",
      });
    }

    res.status(200).json({
      code: 200,
      status: "OK",
      message: "product deleted successfully",
    });
  });
};
