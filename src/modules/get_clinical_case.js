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
            pacient_data: true,
            nutritional_clinical_anamnesis: {
                include: {
                    physical_activities: true
                }
            },
            habits: true,
            food_conditions: true,
            anthropometric_assessment: {
                include: {
                    circumferences: true,
                    skin_folds: true,
                    anthropometric_evaluation_results: true,
                }
            },
            laboratory_tests: true,
            food_recall: {
                include: {
                    meals: true,
                    total_gram_meal: true,
                    geral: true,
                    macronutrients: true,
                    nutrients: true
                }
            },
            food_plan: {
                include: {
                    geral: true,
                    macronutrients: true,
                    nutrients: true
                }
            },
        },
    });

    if (findClinicalCase == false) {
        return null;
    }

    return findClinicalCase;
}

module.exports = getClinicalCaseById;