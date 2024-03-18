import { Request, Response } from 'express';
import UserModel from '../models/User';

class UsersController {
    private userModel: UserModel;

    constructor() {
        this.userModel = new UserModel();
    }

    async getUsers(req: Request, res: Response) {
        try {
            await this.userModel.initializeRepository();
            const users = await this.userModel.getList({...req.params, ...req.query});
            res.json({users});
        } catch (error) {
            console.error('Error getting users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default UsersController;
