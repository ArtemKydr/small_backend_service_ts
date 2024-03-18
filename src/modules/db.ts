import { createConnection, Connection, EntityTarget, Repository } from 'typeorm';

class Database {
    private connection: Connection | undefined;

    constructor() {
        this.connection = undefined;
    }

    public async initializeDb(): Promise<void> {
        try {
            this.connection = await createConnection();
            console.log('Connected to db');
        } catch (error) {
            console.error('Error connecting to database:', error);
            throw error;
        }
    }

    public getRepository<T>(entity: EntityTarget<T>): Repository<T> {
        if (!this.connection) {
            throw new Error('Database connection not established');
        }

        return this.connection.getRepository(entity);
    }
}

const db = new Database();
db.initializeDb().then(() => console.log('Database initialization successful'));
export default db;
