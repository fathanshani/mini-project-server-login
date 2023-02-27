import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products.route.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*" // allow any domain to make a request to this server (only in dev mode)
}));
app.get('/api/v1', (req, res) => res.send('API Ready'));
app.use('/api/v1', productRoutes)


app.listen(process.env.PORT || 3000, () => console.log(`server running on http://localhost:${process.env.PORT}`));