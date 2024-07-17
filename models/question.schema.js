import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  question: { type: String },
  option: [{ type: Object }],
  // voteCount: { type: Number, default: 0 },
});

const Questions = mongoose.model("Question", QuestionSchema);

export default Questions;
