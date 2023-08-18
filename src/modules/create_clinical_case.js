const prisma = require("../database/database.js");

const createClinicalCase = async (
    type,
    introduction,
    gender,
    age,
    profession,
    nationality,
) => {
    const clinicalcase = await prisma.clinicalCase.create({
        data: {
            type: type,
            introduction: introduction,
            pacient_data: {
                create: {
                    gender: gender,
                    age: age,
                    profession: profession,
                    nationality: nationality,
                }
            }
        },
        include: {pacient_data: true}
    });

    return clinicalcase;
}

module.exports = createClinicalCase;