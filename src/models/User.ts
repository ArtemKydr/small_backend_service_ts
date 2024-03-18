import db from '../modules/db';
import { User } from '../entities/User';
import { Repository, FindOneOptions, FindManyOptions } from 'typeorm';

class UserModel {
    private repository: Repository<User> | undefined;

    public async initializeRepository(): Promise<void> {
        try {
            this.repository = await db.getRepository(User);
            console.log('User repository initialized');
        } catch (error) {
            console.error('Error initializing user repository:', error);
            throw error;
        }
    }

    public async createUser(user: User): Promise<User> {
        if (!this.repository) {
            throw new Error('User repository not initialized');
        }
        return await this.repository.save(user);
    }

    public async getList(params: FindManyOptions<User>): Promise<User[]> {
        if (!this.repository) {
            throw new Error('User repository not initialized');
        }
        return await this.repository.find(params);
    }

    // Другие методы для работы с репозиторием
}

const userModel = new UserModel();
userModel.initializeRepository().then(() => console.log('User repository initialization successful'));

export default userModel;
