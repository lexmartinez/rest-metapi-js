import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import routes from './routes';
import logger from 'morgan';
import cors from 'cors';
import auth from './routes/auth.js'

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));
app.use(express.static('public'))
app.use('/api', routes);
app.use('/auth', auth);
app.use(favicon('public/favicon.ico'));

app.listen(3000, () => {
    console.log("Node server running on http://localhost:3000");
});