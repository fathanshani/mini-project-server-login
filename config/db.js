import mysql2 from 'mysql2';

const Connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

Connection.connect((err) => {
    if (err) throw err;
    console.log(`db connected`); // di terminal akan muncul jika tidak ada error pada saat connect ke db
})

export default Connection