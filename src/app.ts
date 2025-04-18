import express, { Application } from 'express';
import cors from 'cors';
import router from './app/router';

const app : Application = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Bike Servicing Server ................................');
});

app.use('/api',router);

export default app;