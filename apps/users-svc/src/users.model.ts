import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { 
        type: String, 
        enum: ['Intern', 'Engineer', 'Admin'], 
        required: true 
    }
});


export interface User extends mongoose.Document {
    id: number;
    name: string;
    email: string;
    role: 'Intern' | 'Engineer' | 'Admin';
}
