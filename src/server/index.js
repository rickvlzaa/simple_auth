import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path'

import routes from './routes';


const app = express();

app.use(express.static(path.resolve(__dirname, '../../build/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(routes);


app.listen(process.env.SERVER_PORT, err => {
    if(!err) {
        console.log(`App is running on port ${process.env.SERVER_PORT}`);
    }
});