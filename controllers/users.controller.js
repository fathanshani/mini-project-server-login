import Connection from "../config/db.js";
import crypto from "crypto";
import bcrypt from "bcrypt";

export const getUsers = (req, res) => {
    const sql = "SELECT * FROM users";
    Connection.query(sql, (err, result) => {
        if (err) {
            return res.status(404).json({msg: "Data tidak ditemukan"})
        }
        res.status(200).json({
            payload: result,
            msg: "Data Users"
        });
    });
}

export const getUserById = (req, res) => {
    const uuid = req.params.id;
    const sql = `SELECT * FROM users WHERE id = '${uuid}'`;
    Connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({msg: err.message})
        }
        res.status(200).json({
            payload: result,
            msg: "Data User by Id"
        });
    });
}

export const createUser = (req, res) => {
    let uuid = crypto.randomUUID();
    const { name, password, confPassword } = req.body;
    if(password ==! confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const hashPassword = bcrypt.hash(password, 10);
    const sql = `INSERT INTO users (id, name, password) VALUES ('${uuid}', '${name}', '${hashPassword}')`;
    Connection.query(sql, (err, result) => {
        if(err) {
            return res.status(400).json({msg: err.message})
        }
        res.status(200).json({
            payload: result,
            msg: "Registrasi Berhasil"
        });
    });
}

export const updateUser = (req, res) => {
    const uuid = req.params.id;
    const user = `SELECT * FROM users WHERE id = '${uuid}'`;
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"})
    const { name, password, confPassword} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password;
    }else{
        hashPassword = bcrypt.hash(password, 10);
    }
    if(password ==! confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak cocok"});
    const sql = `UPDATE users SET name = '${name}', password = '${hashPassword}' WHERE id = '${uuid}'`;
    Connection.query(sql, (err, result) => {
        if (err) {
            return res.status(400).json({msg: err.message})
        }
        res.status(200).json({
            payload: result,
            msg: "Data User diupdate"
        });
    });
}

export const deleteUser = (req, res) => {
    const uuid = req.params.id;
    const user = `SELECT * FROM users WHERE id = '${uuid}'`;
    if(!user) return res.status(404).json({msg: "user tidak ditemukan"})
    const sql = `DELETE FROM users WHERE id = '${user.id}'`
    Connection.query(sql, (err, result) => {
        if (err) {
            return res.status(400).json({msg: err.message})
        }
        res.status(200).json({
            msg: "User Deleted"
        });
    });
}