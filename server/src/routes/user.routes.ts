import express from "express";
import ContestModel from "../models/contest.model.js";

const router = express.Router();

router.post("/:contestId/participants", async (req, res) => {
  const { contestId } = req.params;
  const { participantName } = req.body;

  try {
    const contest = await ContestModel.findOne({ contestId });
    if (!contest) {
      return res.status(404).json({ message: "Contest not found" });
    }

    if (contest.participants.includes(participantName)) {
      return res.status(400).json({ message: "Participant already added" });
    }

    contest.participants.push(participantName);
    await contest.save();

    res.status(200).json({ message: "Participant added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding participant", error });
  }
});

router.get("/dashboard/:gitHubUsername", async (req, res) => {
  const { gitHubUsername } = req.params;

  try {
    const contests = await ContestModel.find({ participants: gitHubUsername });
    res.status(200).json(contests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contests", error });
  }
});

router.post("/attempt/:contestId", async (req, res) => {
  const { contestId } = req.params;
  const { gitHubUsername } = req.body;

  try {
    const contest = await ContestModel.findOne({ contestId });
    if (!contest) {
      return res.status(404).json({ message: "Contest not found" });
    }

    // TODO: add logic to see if user started attempt (palle nahi padh raha ye)

    res.status(200).json({ message: "Contest attempt started successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error starting contest attempt", error });
  }
});
