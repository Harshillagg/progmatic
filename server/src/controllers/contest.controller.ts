
import { ApiError } from "../utils/ApiError.js";
import ContestModel from "../models/contest.model.js";

export const getContestById= async (req: any,res: any,next:any): Promise<void>=>{
    try {
        const cId=req.params.id;
        const contest=await ContestModel.findOne({contestId:`${cId}`});
        if(!contest){
            throw new ApiError(404,"Contest not found")
            return
        }
        return res.status(200).json({contest})
    } catch (error) {
        console.log(error);
        return res.status(404).json({error:"Contest not found"})
    }
}

export const getAllContests=async (req:any,res:any,next:any):Promise<void>=>{
    try {
        const contest=await ContestModel.find();
        if(!contest){
            throw new ApiError(400,"No contests found");
            return;
        }
        res.status(200).json(contest);
    } catch (error) {
        return console.log(error);
    }
}

export const createNewContest=async (req:any,res:any,next:any):Promise<void>=>{
    try {
        const {contestId,questions,gitHubUsername,timeLimit}=req.body;
        const newContest=await ContestModel.create({
            contestId,
            questions,
            gitHubUsername,
            timeLimit
        })
        res.status(200).send(newContest)
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"There was some error"})
    }
}