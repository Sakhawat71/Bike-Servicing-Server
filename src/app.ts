import express, { Application } from 'express';
import cors from 'cors';
import router from './app/router';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app : Application = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send({
        success : true,
        status : 200,
        message : 'Bike Servicing Server ................................'
    });
});

app.use('/api',router);

app.use(globalErrorHandler);

export default app;