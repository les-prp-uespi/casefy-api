const express = require("express");
const app = express();
const router = express.Router();

const createQuizzOption = require("../modules/create_quizz_options.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.post("/createoptions/:id", async (req, res) => {
    const quizzId = req.params.id;
    const dataOptions = {
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer
    }

    const result = await createQuizzOption(dataOptions, quizzId);

    console.log(result);

    if (result == null) {
        res.status(400).json({"message": "Register Error"});
    } else {
        res.status(200).json(result);
    }
});

module.exports = router;