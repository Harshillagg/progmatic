import express from "express"
import QuestionModel from "../models/question.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const getAllQuestions = async (req: any, res: any, next: any): Promise<void> => {
    let questions;
    try {
        questions = await QuestionModel.find()
    } catch (err) {
        return console.log(err)
    }
    if(!questions){
        return res
                .status(404)
                .json({message:"No questions found"})            
    }
    return res.status(200).json({questions})
}

export const createQuestion = async (req: any, res: any, next:any): Promise<void> => {
    try {
      const { questionId, questionName, title, description, platformLink, solved, tags, testCases, answer, example, constraints } = req.body;
  
      // Create a new question instance
      const newQuestion = new QuestionModel({
        questionId,
        questionName,
        title,
        description,
        platformLink,
        solved,
        tags,
        testCases,
        answer,
        example,
        constraints,
      });
  
      const savedQuestion = await newQuestion.save();
      res.status(200).json({savedQuestion});

    } catch (err) {
      // Handle errors
      return console.log(err);
      //res.status(400).json({ message: 'Server error' });
    }


};


export const updateQuestion = async(req:any, res:any, next:any):Promise <void> =>{
    const { questionName, title, description, platformLink, solved, tags, testCases, answer, example, constraints } = req.body;
    const questionId = req.params.id;
    let question;

    try{
        question = await QuestionModel.findByIdAndUpdate(questionId, {
            questionName,
            title,
            description,
            platformLink,
            solved,
            tags,
            testCases,
            answer,
            example,
            constraints,
    })
    } catch (err) {
        return console.log(err)
    }
    if(!question){
        throw new ApiError(500, "No question with this particular ID found")
    }
    return res.status(200).json({question})
}


export const getQuestionById = async(req:any, res:any, next:any):Promise <void> =>{
    const id = req.params.id;
    let question;
    try{
        question = await QuestionModel.findById(id)
        
    } catch (err) {
        return console.log(err)
    }
    if(!question){
        throw new ApiError(500, "No question with this particular ID found")
    }
    return res.status(200).json({question})
    
}

export const deleteQuestion = async(req:any, res:any, next:any):Promise <void> =>{
    const id = req.params.id;
    let question;
    try{
        question = await QuestionModel.findByIdAndDelete(id)
    } catch (err) {
        return console.log(err)
    }
    if(!question){
        
        throw new ApiError(500, "Unable to delete question.")
    }
    return res.status(200).json({message:"Question deleted!!"})
}

 

