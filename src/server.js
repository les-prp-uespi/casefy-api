const express = require("express");
const port = 3000;
const server = express();

const createClinicalCaseRoute = require("./routes/create_clinical_case_route.js");
const getClinicalCaseRoute = require("./routes/get_clinical_case_route.js");
const getAllClinicalCasePacientDataRoute = require("./routes/get_all_clinical_case_pacient_data_route.js");

server.use(express.json());

server.use(createClinicalCaseRoute);
server.use(getClinicalCaseRoute);
server.use(getAllClinicalCasePacientDataRoute);

server.get("/", (req, res) => {
    res.send("CASEFY API");
});

server.listen(port, () => console.log("Server running on port: ", port));