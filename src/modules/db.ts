import { createConnection } from 'typeorm';
import dbConfig from '../config/dbConfig';

const db = createConnection(dbConfig);

export default db;
