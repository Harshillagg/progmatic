import mongoose, { Document, Schema } from 'mongoose';
// import jwt from "jsonwebtoken"
import {RoleDocument} from "./role.model.js"

export interface UserDocument extends Document {
  gitHubUsername: string;
  accessToken: string;
  profilePhoto: string;
  role: RoleDocument['_id']
  contests: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<UserDocument> = new Schema(
  {
    _id: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    gitHubUsername: 
    { 
        type: String, 
        required: true 
    },
    accessToken: 
    { 
        type: String, 
        required: true 
    },
    profilePhoto: 
    { 
        type: String, 
        required: true 
    },
    role: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role', 
        required: true 
    },
    contests: 
    { 
        type: Number, 
        default: 0 
    },
  },

    { 
    timestamps: true 
    }
);


// UserSchema.methods.generateAccessToken = function(): string {
//     return jwt.sign({
//             _id: this._id,
//         },
//             process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//         }
//     );
// }

const UserModel = mongoose.model<UserDocument>('User', UserSchema);
export default UserModel;
