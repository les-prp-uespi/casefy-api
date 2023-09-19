const prisma = require("../database/database.js");

const getAllClinicalCasePacientData = async () => {
    const findAllClinicalCasePacientData = await prisma.clinicalCase.findMany({
        include: {pacient_data: true}
    });

    //console.log(findAllClinicalCasePacientData);

    return findAllClinicalCasePacientData;
};

module.exports = getAllClinicalCasePacientData;