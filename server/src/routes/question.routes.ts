import {Router} from "express"
import express from "express"
import { createQuestion, deleteQuestion, getAllQuestions, getQuestionById, updateQuestion } from "../controllers/question.controller.js";
import { getAdapter } from "axios";

const questionRouter = express.Router()

questionRouter.get("/", getAllQuestions)
questionRouter.post("/add", createQuestion)
questionRouter.put("/update/:id", updateQuestion)
questionRouter.get("/:id", getQuestionById)
questionRouter.delete("/:id", deleteQuestion)

export default questionRouter;

