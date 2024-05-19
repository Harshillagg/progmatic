import mongoose, { Document, Schema } from "mongoose";

export interface RoleDocument extends Document {
  role: "participant" | "admin";
}

const RoleSchema: Schema<RoleDocument> = new Schema({
  role: {
    type: String,
    enum: ["participant", "admin"],
    required: true,
    unique: true,
  },
});

const RoleModel = mongoose.model<RoleDocument>("Role", RoleSchema);
export default RoleModel;
