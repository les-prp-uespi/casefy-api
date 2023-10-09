const express = require("express");
const app = express();
const router = express.Router();

const createQuizz = require("../modules/create_quizz.js");
const createQuizzOption = require("../modules/create_quizz_options.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.post("/createquizz/:id", async (req, res) => {
    const clinicalCaseId = req.params.id;
    const dataOptions = {
        questions: req.body.questions,
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer
    }

    const result = await createQuizz(clinicalCaseId, dataOptions);

    console.log(dataOptions.questions.length);

    const quizzId = result.id;

    var questionsList = [];
    var resultOptions;

    console.log(quizzId);

    for (var i = 0; i < dataOptions.questions.length; i++) {
        dataOptions.question = req.body.questions[i].question.toString();
        dataOptions.options = req.body.questions[i].options;
        dataOptions.answer = req.body.questions[i].answer;
        questionsList.push(dataOptions.questions[i]);
        resultOptions = await createQuizzOption(dataOptions.question, dataOptions.options, dataOptions.answer, quizzId);
    }

    if (result == null) {
        res.status(400).json({"message": "Register Error"});
    } else {
        res.status(200).json(result);
    }
});

module.exports = router;