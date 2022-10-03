import express from 'express';
import bodyParser from 'body-parser';
import { dogRouter } from './router/dogRouter';


const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
    res.cookie('token', 'test', {signed: true});
    res.send('Hello World!');
});

app.use('/Dog', dogRouter);

app.listen(port);