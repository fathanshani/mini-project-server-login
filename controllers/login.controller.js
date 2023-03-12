import Connection from "../config/db.js";
import bcrypt from "bcrypt";

export const login = (req, res) => {
    const name = req.body.name
    const sql = `SELECT * FROM users WHERE name = '${name}'`;
    Connection.query(sql, (err, result) => {
        if (err) {
            return res.status(404).json({msg: "User tidak ditemukan"});
        }
        const match = bcrypt.compareSync(req.body.password, result[0].password);
        if(!match) return res.status(400).json({msg: "Wrong password"});
        req.session.userId = result[0].id;
        const id = result[0].id;
        const name = result[0].name;
        res.status(200).json({
            payload: {
                id,
                name
            },
            msg: "Login Berhasil"
        });
    });
}
// console.log(result[0].password)
// if want to get value from result use result[0].fieldName

// export const me = (req, res) => {
//     if(!req.session.userId){
//         return res.status(401).json({msg: "Mohon login ke akun Anda!"})
//     }
//     const sql = `SELECT * FROM users WHERE id`
// }