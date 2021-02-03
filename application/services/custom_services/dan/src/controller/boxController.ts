import { Request, Response } from 'express';
import { boxService } from '../service/boxService';
import { CustomLogger } from '../config/Logger'
let box = new boxService();

export class boxController {
    
    constructor() { }
    
    public GpUpdate(req: Request, res: Response) {
box.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into boxController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from boxController.ts: GpUpdate');
    })}
public GpDelete(req: Request, res: Response) {
box.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into boxController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from boxController.ts: GpDelete');
    })}
public GpCreate(req: Request, res: Response) {
box.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into boxController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from boxController.ts: GpCreate');
    })}
public GpSearch(req: Request, res: Response) {
box.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into boxController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from boxController.ts: GpSearch');
    })}


}