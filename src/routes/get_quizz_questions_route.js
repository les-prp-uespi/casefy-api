const express = require("express");
const app = express();
const router = express.Router();

const getQuizzQuestions = require("../modules/get_quizz_questions.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get("/quizz/questions/:id", async (req, res) => {
    const quizzId = req.params.id;

    const result = await getQuizzQuestions(quizzId);

    if (result == null) {
        res.status(400).json({"message": "Quizz Questions Not Find"});
    } else {
        res.status(200).json(result);
    }
});

module.exports = router;