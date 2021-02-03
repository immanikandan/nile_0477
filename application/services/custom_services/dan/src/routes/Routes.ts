import { Request, Response, NextFunction } from "express";
import { boxController } from '../controller/boxController';


export class Routes {
    private box: boxController = new boxController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/box').put(this.box.GpUpdate);
app.route('/box/:id').delete(this.box.GpDelete);
app.route('/box').post(this.box.GpCreate);
app.route('/box/get/search').get(this.box.GpSearch);
     }

}