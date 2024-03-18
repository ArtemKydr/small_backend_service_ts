import express, { Router, Request, Response } from 'express';
import UsersController from '../controllers/usersController';

class UserRouter {
    private router: Router;
    private usersController: UsersController;

    constructor() {
        this.router = express.Router();
        this.usersController = new UsersController();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/', this.getUsers.bind(this));
    }

    private async getUsers(req: Request, res: Response): Promise<void> {
        try {
            await this.usersController.getUsers(req, res);
        } catch (error) {
            console.error('Error handling request:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default new UserRouter().getRouter();
