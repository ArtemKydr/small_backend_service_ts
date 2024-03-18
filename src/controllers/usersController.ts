import { Request, Response } from 'express';
import usersModel from '../models/User';

const getUsers = async (req: Request, res: Response) => {

    const users = await usersModel.getList({...req.params, ...req.query});
    res.json(users);
};

export {
    getUsers
}
