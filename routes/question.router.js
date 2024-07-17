import express from "express";
import {
  addOption,
  // addVote,
  createQuestion,
  deleteOption,
  deleteQuestion,
  getQuestion,
} from "../controllers/question.controller.js";

const router = express.Router();

// create question router
router.post("/questions/create", createQuestion);

//to get question
router.get("/questions/get", getQuestion);

//to add option
router.post("/questions/:id/options/create", addOption);

//to delete question
router.delete("/questions/:id/delete", deleteQuestion);

// to delete option
router.delete("/options/:id/delete", deleteOption);

export default router;
