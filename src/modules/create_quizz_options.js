const prisma = require("../database/database.js");

const createQuizzOptions = async (
    dataOptions,
    quizzId
) => {
    const quizzOptions = await prisma.questions.create({
        data: {
            quizzId: quizzId,
            question: dataOptions.question,
            options: dataOptions.options,
            answer: dataOptions.answer
        }
    });


    return quizzOptions;
}

module.exports = createQuizzOptions;