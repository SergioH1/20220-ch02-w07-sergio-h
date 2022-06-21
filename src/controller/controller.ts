import { Request, Response } from 'express';
import fs from 'fs/promises';

export interface iData {
    id: number;
    title: string;
}

const dataFilePath = './data/data.json';
const dataFileContent = await fs.readFile(dataFilePath, {
    encoding: 'utf-8',
});

export const getController = (req: Request, resp: Response) => {
    req;
    resp.setHeader('Content-type', 'application/json');
    resp.end(dataFileContent);
};

export const getIdController = (req: Request, resp: Response) => {
    req;
    resp.setHeader('Content-type', 'application/json');
    const result = JSON.parse(dataFileContent);
    const tasks = result.tasks;
    const data = tasks.find((task: iData) => task.id === +req.params.id);
    if (data) {
        resp.end(JSON.stringify(data));
    } else {
        resp.status(404);
        resp.end(JSON.stringify({}));
    }
};
