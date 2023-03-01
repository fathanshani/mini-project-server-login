import Connection from "../config/db.js";

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
}

export const getProductById = (req, res) => {
    
}

export const createProduct = (req, res) => {
    
}

export const updateProduct = (req, res) => {
    
}

export const deleteProduct = (req, res) => {
    
}