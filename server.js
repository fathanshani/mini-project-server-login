import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.route.js'
import productRoutes from './routes/products.route.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionConfig from './config/session.config.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session(sessionConfig))
app.use(cors({
    origin: "*" // allow any domain to make a request to this server (only in dev mode)
}));
app.get('/api/v1', (req, res) => res.send('API Ready'));
app.use('/users', userRoutes)
app.use('/api/v1/products', productRoutes)

// app.post('/login', (req, res) => {
//     console.log({ requestFromOutside: req.body})
//     res.send('login berhasil')
// })


app.listen(process.env.PORT || 3000, () => console.log(`server running on http://localhost:${process.env.PORT}`));