import Question from "../models/question.schema.js";

// create question
export const createQuestion = async (req, res) => {
  try {
    const question = new Question(req.body);
    // console.log(req.body);
    const questionRecord = await question.save();
    res.status(201).send(questionRecord);
  } catch (err) {
    res.status(500).send(err);
  }
};

// to get question
export const getQuestion = async (req, res) => {
  try {
    const question = await Question.find({});
    res.status(201).send(question);
  } catch (err) {
    res.status(500).send(err);
  }
};

// delete question
export const deleteQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    const question = await Question.findByIdAndDelete(questionId);
    if (!question) {
      return res.status(404).send({ message: "Question not found" });
    }
    res
      .status(200)
      .send({ message: "Question deleted successfully", question });
  } catch (err) {
    res.status(500).send({ message: "Server error", error: err });
  }
};

// to add option to a question
export const addOption = async (req, res) => {
  try {
    const id = req.params.id;
    const option = req.body;
    const question = await Question.findById(id);
    if (!question) {
      res.status(404).send("Question not found");
    } else {
      const newOptionId = question.option.length + 1;
      const addVoteLink = async (newOptionId) => {
        return `http://localhost:8080/options/${newOptionId}/add_vote`;
      };
      const newOption = {
        id: newOptionId,
        text: option,
        voteCount: 0,
        link_to_vote: `http://localhost:8080/options/${newOptionId}/add_vote`,
      };
      question.option.push(newOption);
      await question.save();
      res.status(201).json(newOption);
    }
  } catch (err) {
    res.status(500).send({ message: "Server error", error: err });
  }
};

export const deleteOption = async (req, res) => {
  const id = req.params;
  const deleteID = question.option.id(id);
  const deleteOption = await Question.findByIdAndDelete(deleteID);
};
