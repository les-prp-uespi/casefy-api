const express = require("express");
const port = 3000;
const server = express();

const createClinicalCaseRoute = require("./routes/create_clinical_case_route.js");
const createQuizz = require("./routes/create_quizz_route.js");
const createQuizzOptionRoute = require("./routes/create_quizz_options_route.js");
const getClinicalCaseRoute = require("./routes/get_clinical_case_route.js");
const getAllClinicalCasePacientDataRoute = require("./routes/get_all_clinical_case_pacient_data_route.js");
const getQuizzQuestionsRoute = require("./routes/get_quizz_questions_route.js");
const getQuizzByClinicalCaseId = require("./routes/get_quizz_by_clinical_case_id_route.js");

server.use(express.json());

server.use(createClinicalCaseRoute);
server.use(createQuizz);
server.use(createQuizzOptionRoute);
server.use(getClinicalCaseRoute);
server.use(getAllClinicalCasePacientDataRoute);
server.use(getQuizzQuestionsRoute);
server.use(getQuizzByClinicalCaseId);

server.get("/", (req, res) => {
    res.send("CASEFY API");
});

server.listen(port, () => console.log("Server running on port: ", port));