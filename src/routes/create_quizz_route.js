const express = require("express");
const app = express();
const router = express.Router();

const createQuizz = require("../modules/create_quizz.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.post("/createquizz/:id", async (req, res) => {
    const clinicalCaseId = req.params.id;

    const result = await createQuizz(clinicalCaseId);

    if (result == null) {
        res.status(400).json({"message": "Register Error"});
    } else {
        res.status(200).json(result);
    }
});

module.exports = router;