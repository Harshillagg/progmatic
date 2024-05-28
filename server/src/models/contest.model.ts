import mongoose, { Document, Schema } from "mongoose";

export interface ContestDocument extends Document {
  contestId: string;
  questions: string[];
  gitHubUsername: string;
  timeLimit: number;
  participants: string[];
}

const ContestSchema: Schema<ContestDocument> = new Schema({
  contestId: {
    type: String,
    required: true,
    unique: true,
  },
  questions: {
    type: [String],
    required: true,
  },
  gitHubUsername: {
    type: String,
    required: true,
  },
  timeLimit: {
    type: Number,
    required: true,
  },
  participants: {
    type: [String],
    default: [],
  },
});

const ContestModel = mongoose.model<ContestDocument>("Contest", ContestSchema);
export default ContestModel;
