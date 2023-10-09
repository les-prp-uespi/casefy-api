const prisma = require("../database/database.js");

const createQuizzOptions = async (
    question,
    options,
    answer,
    quizzId
) => {
    const quizzOptions = await prisma.questions.create({
        data: {
            quizzId: quizzId,
            question: question,
            options: options,
            answer: answer
        }
    });


    return quizzOptions;
}

module.exports = createQuizzOptions;