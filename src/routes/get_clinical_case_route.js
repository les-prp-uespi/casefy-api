const express = require("express");
const app = express();
const router = express.Router();

const getClinicalCaseById = require("../modules/get_clinical_case.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get("/clinicalcase", async (req, res) => {
    const id = req.body.id;

    console.log(id);

    const result = await getClinicalCaseById(id);

    if (result == null) {
        res.status(400).json({"message": "Clinical Case not find"});
    } else {
        res.status(200).json(result);
    }
});

module.exports = router;