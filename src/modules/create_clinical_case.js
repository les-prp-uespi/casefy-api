const prisma = require("../database/database.js");

const createClinicalCase = async (
    data,
    dataFoodRecall,
    dataFoodPlan,
    dataQuizz
) => {
    const clinicalcase = await prisma.clinicalCase.create({
        data: {
            type: data.type,
            introduction: data.introduction,
            diagnosis: data.diagnosis,
            nutritional_conduct: data.nutritional_conduct,
            /*quizz: {
                create: {
                    questions: {
                        create: {
                            question: dataQuizz.question,
                            options: dataQuizz.options,
                            answer: dataQuizz.answer
                        }
                    }
                }
            },*/
            pacient_data: {
                create: {
                    gender: data.gender,
                    age: data.age,
                    profession: data.profession,
                    nationality: data.nationality,
                }
            },
            nutritional_clinical_anamnesis: {
                create: {
                    psychological_condition: data.psychological_condition,
                    previous_pathologies: data.previous_pathologies,
                    family_background: data.family_background,
                    gastrointestinal_diseases: data.gastrointestinal_diseases,
                    gastrointestinal_complaints: data.gastrointestinal_complaints,
                    evacuations: data.evacuations,
                    stool_consistency: data.stool_consistency,
                    stool_coloring: data.stool_coloring,
                    use_of_laxatives: data.use_of_laxatives,
                    medicines_use_at_home: data.medicines_use_at_home,
                    alternative_medicines: data.alternative_medicines,
                    replacement_of: data.replacement_of,
                    conditions_that_affect_get: data.conditions_that_affect_get,
                    physical_activities: {
                        create: {
                            practice: data.practice,
                            frequency: data.frequency,
                            duration: data.duration,
                            activity_practiced: data.activity_practiced
                        }
                    },
                },
            },
            habits: {
                create: {
                    smoker: data.smoker,
                    smoker_how_long: data.smoker_how_long,
                    cigarettes_a_day: data.cigarettes_a_day,
                    alcoholism: data.alcoholism,
                    frequency_alcoholism: data.frequency_alcoholism,
                    type_alcoholism: data.type_alcoholism,
                    amount_of_alcohol: data.amount_of_alcohol,
                }
            },
            food_conditions: {
                create: {
                    limitation_for_food_preparation: data.limitation_for_food_preparation,
                    current_clinical_condition: data.current_clinical_condition,
                    food_allergy_or_condition: data.food_allergy_or_condition,
                    allergy_to_the_following_foods: data.allergy_to_the_following_foods,
                    use_of_supplements: data.use_of_supplements,
                    used_supplement: data.used_supplement,
                    food_aversion: data.food_aversion,
                    food_preference: data.food_preference,
                    loss_of_appetite: data.loss_of_appetite,
                    loss_of_aptitude_time: data.loss_of_aptitude_time,
                    loss_of_appetite_because: data.loss_of_appetite_because,
                    changed_diet_consistency: data.changed_diet_consistency,
                    changed_diet_consistency_time: data.changed_diet_consistency_time,
                    changed_diet_consistency_because: data.changed_diet_consistency_because,
                    dining_place: data.dining_place,
                    who_buys_the_food: data.who_buys_the_food,
                    who_prepares_the_food: data.who_prepares_the_food,
                    food_storage: data.food_storage,
                    way_of_preparing_food: data.way_of_preparing_food,
                }
            },
            anthropometric_assessment: {
                create: {
                    size: data.size,
                    weight: data.weight,
                    circumferences: {
                        create: {
                            shoulder: data.shoulder,
                            waist: data.waist,
                            hip: data.hip,
                            left_thigh: data.left_thigh,
                            left_proximal_thigh: data.left_proximal_thigh,
                            left_calf: data.left_calf,
                            right_fist: data.right_fist,
                            relaxed_right_arm: data.relaxed_right_arm,
                            right_contracted_arm: data.right_contracted_arm,
                            right_forearm: data.right_forearm,
                            breastplate: data.breastplate,
                            abdomen: data.abdomen,
                            right_thigh: data.right_thigh,
                            right_proximal_thigh: data.right_proximal_thigh,
                            right_calf: data.right_calf,
                            neck: data.neck,
                            left_fist: data.left_fist,
                            relaxed_left_arm: data.relaxed_left_arm,
                            left_contracted_arm: data.left_contracted_arm,
                            left_forearm: data.left_forearm,
                        }
                    },
                    skin_folds: {
                        create: {
                            biceps: data.biceps,
                            triceps: data.triceps,
                            middle_axillary: data.middle_axillary,
                            chest: data.chest,
                            middle_calf: data.middle_calf,
                            abdominal: data.abdominal,
                            suprailiac: data.suprailiac,
                            subscapular: data.subscapular,
                            thigh: data.thigh,
                        }
                    },
                    anthropometric_evaluation_results: {
                        create: {
                            current_bmi: data.current_bmi,
                            recommended_bmi_min: data.recommended_bmi_min,
                            recommended_bmi_max: data.recommended_bmi_max,
                            bmi_situation: data.bmi_situation,
                            ideal_weight: data.ideal_weight,
                            fat_mass_percentage: data.fat_mass_percentage,
                            fat_mass_percentage_recommended: data.fat_mass_percentage_recommended,
                            fat_mass_percentage_situation: data.fat_mass_percentage_situation,
                            percentage_of_lean_mass: data.percentage_of_lean_mass,
                            percentage_of_lean_mass_recommended: data.percentage_of_lean_mass_recommended,
                            percentage_of_lean_mass_situation: data.percentage_of_lean_mass_situation,
                            fat_mass: data.fat_mass,
                            fat_mass_recommended: data.fat_mass_recommended,
                            fat_mass_situation: data.fat_mass_situation,
                            lean_mass: data.lean_mass,
                            lean_mass_recommended: data.lean_mass_recommended,
                            lean_mass_situation: data.lean_mass_situation,
                            sum_of_folds: data.sum_of_folds,
                            waist_hip_ratio: data.waist_hip_ratio,
                            waist_hip_ratio_situation: data.waist_hip_ratio_situation,
                            arm_muscle_area: data.arm_muscle_area,
                            arm_muscle_area_situation: data.arm_muscle_area_situation,
                            arm_fat_area: data.arm_fat_area,
                            arm_fat_area_situation: data.arm_fat_area_situation,
                        }
                    }
                }
            },
            laboratory_tests: {
                create: {
                    glycemia: data.glycemia,
                    plasma_potassium: data.plasma_potassium,
                    total_cholesterol: data.total_cholesterol,
                    hld_cholesterol: data.hld_cholesterol,
                    ldl_cholesterol: data.ldl_cholesterol,
                    hemoglobin: data.hemoglobin,
                    hemoglobin_situation: data.hemoglobin_situation,
                    hematocrit: data.hematocrit,
                    hematocrit_situation: data.hematocrit_situation,
                    vcm: data.vcm,
                    vcm_situation: data.vcm_situation,
                    hmc: data.hmc,
                    hmc_situation: data.hmc_situation,
                    chcm: data.chcm,
                    chcm_situation: data.chcm_situation,
                    leukocyte: data.leukocyte,
                    leukocyte_situation: data.leukocyte_situation,
                    segmented_neutrophils: data.segmented_neutrophils,
                    segmented_neutrophils_situation: data.segmented_neutrophils_situation,
                    lymphocytes: data.lymphocytes,
                    lymphocytes_situation: data.lymphocytes_situation,
                    monocytes: data.monocytes,
                    monocytes_situation: data.monocytes_situation,
                    platelets: data.platelets,
                    platelets_situation: data.platelets_situation,
                    triglycerides: data.triglycerides,
                    triglycerides_situation: data.triglycerides_situation,
                    glucose: data.glucose,
                    glucose_situation: data.glucose_situation,
                    insulin: data.insulin,
                    insulin_situation: data.insulin_situation,
                    uric_acid: data.uric_acid,
                    uric_acid_situation: data.uric_acid_situation,
                    direct_bilirubin: data.direct_bilirubin,
                    direct_bilirubin_situation: data.direct_bilirubin_situation,
                    indirect_bilirubin: data.indirect_bilirubin,
                    indirect_bilirubin_situation: data.indirect_bilirubin_situation,
                    hemoglobin_glicada: data.hemoglobin_glicada,
                    hemoglobin_glicada_situation: data.hemoglobin_glicada_situation,
                    vitamin_d: data.vitamin_d,
                    vitamin_d_situation: data.vitamin_d_situation,
                    rdw: data.rdw,
                    rdw_situation: data.rdw_situation,
                    urea: data.urea,
                    serum_creatine: data.serum_creatine,
                }
            },
        },
        include: {
            pacient_data: true,
            //questions: true,
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
        },
    });

    return clinicalcase;
}

module.exports = createClinicalCase;