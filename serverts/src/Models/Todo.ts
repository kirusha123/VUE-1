import {Schema, model, Types} from 'mongoose'

export interface TodoInterface{
    title:string;
    completed:boolean;
}

const schema = new Schema<TodoInterface>({
    t_id: {type: String, required: true, unique: true},
    title: {type: String, ref: 'Link', required: true},
    completed: {type: Boolean, required: true},
})

export default model<TodoInterface>('Todo', schema)