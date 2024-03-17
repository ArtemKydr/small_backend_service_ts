import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

import { db } from './modules/db';
import usersRouter from './routes/users';
import appConfig from './config/appConfig';

const app = express();
app.use(bodyParser.json());

app.use('/api/users', usersRouter);

db.then(() => {
    app.listen(appConfig.port, () => {
        console.log(`Server is running on port ${appConfig.port}`);
    });
}).catch((error) => console.error('Error connecting to the database:', error));
