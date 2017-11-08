import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import routes from './routes';
import logger from 'morgan';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.static('public'))
app.use('/api', routes);
app.use(favicon('public/favicon.ico'));

app.listen(3000, () => {
    console.log("Node server running on http://localhost:3000");
});