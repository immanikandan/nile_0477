
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const boxSchema = new Schema({
   name: String,
   place: String
})

const boxModel = mongoose.model('box', boxSchema, 'box');
export default boxModel;
