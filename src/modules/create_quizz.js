const prisma = require("../database/database.js");

const createQuizz = async (
    clinicalCaseId
) => {
    const quizz = await prisma.quizz.create({
        data: {
            clinicalCaseId: clinicalCaseId,
        }
    });


    return quizz;
}

module.exports = createQuizz;