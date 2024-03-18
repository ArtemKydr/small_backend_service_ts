import { createConnection, Connection, EntityTarget, Repository } from 'typeorm';
import config from '../config/dbConfig';

class Database {
    private connection: Connection | undefined;

    constructor() {
        this.connection = undefined;
    }

    public async initializeDb(): Promise<void> {
        try {
            this.connection = await createConnection(config);
            console.log('Connected to db');
        } catch (error) {
            console.error('Error connecting to database:', error);
            throw error;
        }
    }

    public async getRepository<T extends object>(entity: EntityTarget<T>): Promise<Repository<T>> {
        if (!this.connection) {
            console.warn('Waiting for database connection...');
            await this.initializeDb();
        }

        if (!this.connection) {
            throw new Error('Database connection not established');
        }

        return this.connection.getRepository(entity);
    }
}

const db = new Database();
export default db;
