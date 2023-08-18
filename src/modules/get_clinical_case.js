const prisma = require("../database/database.js");

const getClinicalCaseById = async (
    id,
) => {
    const findClinicalCase = await prisma.clinicalCase.findFirst({
        where: {
            id: {
                equals: id
            }
        },
        include: {
            pacient_data: true
        }
    });

    if (findClinicalCase == false) {
        return null;
    }

    return findClinicalCase;
}

module.exports = getClinicalCaseById;