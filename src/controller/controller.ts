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
const result: { tasks: iData[] } = JSON.parse(dataFileContent);
const tasks: iData[] = result.tasks;

export const getController = (req: Request, resp: Response) => {
    req;
    resp.setHeader('Content-type', 'application/json');
    resp.end(dataFileContent);
};

export const getIdController = (req: Request, resp: Response) => {
    req;
    resp.setHeader('Content-type', 'application/json');

    const data = tasks.find((task: iData) => task.id === +req.params.id);
    if (data) {
        resp.end(JSON.stringify(data));
    } else {
        resp.status(404);
        resp.end(JSON.stringify({}));
    }
};
export const addController = async (req: Request, resp: Response) => {
    const newTask = { ...req.body, id: tasks[tasks.length - 1].id + 1 };
    result.tasks.push(newTask);
    await fs.writeFile(dataFilePath, JSON.stringify(result), {
        encoding: 'utf-8',
    });
    resp.setHeader('Content-type', 'application/json');
    resp.status(201);
    resp.end(JSON.stringify(newTask));
};
