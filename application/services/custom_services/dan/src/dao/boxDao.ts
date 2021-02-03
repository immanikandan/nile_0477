import * as mongoose from 'mongoose';
import boxModel from '../models/box';
import { CustomLogger } from '../config/Logger'


export class boxDao {
    private box = boxModel;
    constructor() { }
public GpUpdate(boxData, callback){
new CustomLogger().showLogger('info', 'Enter into boxDao.ts: GpUpdate')

this.box.findOneAndUpdate({ _id: boxData._id }, boxData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from boxDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(boxId, callback){
new CustomLogger().showLogger('info', 'Enter into boxDao.ts: GpDelete')

this.box.findByIdAndRemove(boxId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from boxDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(boxData, callback){
new CustomLogger().showLogger('info', 'Enter into boxDao.ts: GpCreate')
let temp = new boxModel(boxData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from boxDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(boxData, callback){
new CustomLogger().showLogger('info', 'Enter into boxDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(boxData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.box.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from boxDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}


}