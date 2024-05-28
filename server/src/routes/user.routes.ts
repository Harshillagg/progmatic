import express from "express";
import {
  addParticipant,
  fetchContest,
  startAttempt,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/:contestId/participants", addParticipant);
router.get("/dashboard/:gitHubUsername", fetchContest);
router.post("/attempt/:contestId", startAttempt); //TODO
