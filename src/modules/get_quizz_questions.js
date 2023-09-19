const prisma = require("../database/database.js");

const getQuizzQuestions = async (
    quizzId
) => {
    const questions = await prisma.questions.findMany({
        where: {
            quizzId: {
                equals: quizzId
            }
        }
    });

    return questions;
};

module.exports = getQuizzQuestions;