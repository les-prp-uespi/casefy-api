const prisma = require("../database/database.js");

const getQuizzByClinicalCaseId = async (
    clinicalCaseId
) => {
    const quizz = await prisma.quizz.findFirst({
        where: {
            clinicalCaseId: {
                equals: clinicalCaseId
            }
        }
    });

    return quizz;
};

module.exports = getQuizzByClinicalCaseId;