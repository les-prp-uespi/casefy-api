const express = require("express");
const app = express();
const router = express.Router();

const getAllClinicalCasePacientData = require("../modules/get_all_clinical_case_pacient_data.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get("/clinicalcases", async (req, res) => {
    const result = await getAllClinicalCasePacientData();

    if (result == null) {
        res.status(400).json({"message": "Clinical Case not find"});
    } else {
        res.status(200).json({
            "clinicalcases": result
        });
    }
});

module.exports = router;