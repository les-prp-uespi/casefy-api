const express = require("express");
const app = express();
const router = express.Router();

const getQuizzByClinicalCaseId = require("../modules/get_quizz_by_clinical_case_id.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get("/quizz/:id", async (req, res) => {
    const clinicalCaseId = req.params.id;

    const result = await getQuizzByClinicalCaseId(clinicalCaseId);

    if (result == null) {
        res.status(400).json({"message": "Quizz Not Find"});
    } else {
        res.status(200).json(result);
    }
});

module.exports = router;