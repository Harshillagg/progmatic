import { Router } from "express";

import { getAllContests,getContestById,createNewContest } from "../controllers/contest.controller.js";

const contestRouter=Router()

contestRouter.get('/',getAllContests);
contestRouter.get('/:id',getContestById);
contestRouter.post('/createContest',createNewContest);

export default contestRouter