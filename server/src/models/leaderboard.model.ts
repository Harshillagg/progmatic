import mongoose, { Document, Schema } from "mongoose";
import { UserDocument } from "./user.model.js";
import {ContestDocument} from "./contest.model.js";

interface LeaderboardDocument extends Document {
  rank: number;
  score: number;
  user: UserDocument["_id"];
  contestId: ContestDocument["_id"];
  gitHubUsername: string;
  timeTaken: number;
  correctAnswers: number;
}


const LeaderboardSchema: Schema<LeaderboardDocument> = new Schema({
  rank: { 
    type: Number, 
    required: true 
  },
  score: { 
    type: Number, 
    required: true 
  },
  user: { 
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  contestId: { 
    type: Schema.Types.ObjectId, 
    ref: "Contest", 
    required: true 
  },
  gitHubUsername: { 
    type: String, 
    required: true 
  },
  timeTaken: { 
    type: Number, 
    required: true 
  },
  correctAnswers: { 
    type: Number, 
    required: true 
  },
});

const LeaderboardModel = mongoose.model<LeaderboardDocument>(
  "Leaderboard",
  LeaderboardSchema
);

export default LeaderboardModel;
