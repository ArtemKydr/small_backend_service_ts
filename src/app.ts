import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();
import appConfig from './config/appConfig';
import db from './modules/db';
db.initializeDb().then(() => console.log('Database initialization successful'))

const app = express();
app.use(bodyParser.json());

import usersRouter from './routes/users';
app.use('/api/users', usersRouter);

app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`);
});
