const express = require("express");
const app = express();
const router = express.Router();

const createClinicalCase = require("../modules/create_clinical_case.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.post("/register", async (req, res) => {
    const type = req.body.type;
    const introduction = req.body.introduction;
    const gender = req.body.pacient_data.gender;
    const age = req.body.pacient_data.age;
    const profession = req.body.pacient_data.profession;
    const nationality = req.body.pacient_data.nationality;

    const result = await createClinicalCase(type, introduction, gender, age, profession, nationality);

    if (result == null) {
        res.status(400).json({"message": "Register Error"});
    } else {
        res.status(200).json(result);
    }
});

module.exports = router;