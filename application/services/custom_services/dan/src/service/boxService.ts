import { Request, Response } from 'express';
import {boxDao} from '../dao/boxDao';
import { CustomLogger } from '../config/Logger'
let box = new boxDao();

export class boxService {
    
    constructor() { }
    
    public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into boxService.ts: GpUpdate')
     const  boxData = req.body;
     box.GpUpdate(boxData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from boxService.ts: GpUpdate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into boxService.ts: GpDelete')
     const  boxId = req.params.id;
     box.GpDelete(boxId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from boxService.ts: GpDelete')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into boxService.ts: GpCreate')
     const  boxData = req.body;
     box.GpCreate(boxData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from boxService.ts: GpCreate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into boxService.ts: GpSearch')
     const  boxData = req.query;
     box.GpSearch(boxData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from boxService.ts: GpSearch')
         callback(response);
         });
    }


}