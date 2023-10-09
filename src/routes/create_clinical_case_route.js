const express = require("express");
const app = express();
const router = express.Router();

const createClinicalCase = require("../modules/create_clinical_case.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.post("/register", async (req, res) => {
    const data = {
        type : req.body.type,
        introduction : req.body.introduction,
        diagnosis: req.body.diagnosis,
        nutritional_conduct: req.body.nutritional_conduct,
        questions: req.body.questions,
        //pacient data
        gender : req.body.pacient_data.gender,
        age : req.body.pacient_data.age,
        profession : req.body.pacient_data.profession,
        nationality : req.body.pacient_data.nationality,
        //NutritionalClinicalAnamnesis
        psychological_condition: req.body.nutritional_clinical_anamnesis.psychological_condition,
        previous_pathologies: req.body.nutritional_clinical_anamnesis.previous_pathologies,
        family_background: req.body.nutritional_clinical_anamnesis.family_background,
        gastrointestinal_diseases: req.body.nutritional_clinical_anamnesis.gastrointestinal_diseases,
        gastrointestinal_complaints: req.body.nutritional_clinical_anamnesis.gastrointestinal_complaints,
        evacuations: req.body.nutritional_clinical_anamnesis.evacuations,
        stool_consistency: req.body.nutritional_clinical_anamnesis.stool_consistency,
        stool_coloring: req.body.nutritional_clinical_anamnesis.stool_coloring,
        use_of_laxatives: req.body.nutritional_clinical_anamnesis.use_of_laxatives,
        medicines_use_at_home: req.body.nutritional_clinical_anamnesis.medicines_use_at_home,
        alternative_medicines: req.body.nutritional_clinical_anamnesis.alternative_medicines,
        replacement_of: req.body.nutritional_clinical_anamnesis.replacement_of,
        conditions_that_affect_get: req.body.nutritional_clinical_anamnesis.conditions_that_affect_get,
        //PhysicalActivities
        practice: req.body.nutritional_clinical_anamnesis.physical_activities.practice,
        frequency: req.body.nutritional_clinical_anamnesis.physical_activities.frequency,
        duration: req.body.nutritional_clinical_anamnesis.physical_activities.duration,
        activity_practiced: req.body.nutritional_clinical_anamnesis.physical_activities.activity_practiced,
        //Habits
        smoker: req.body.habits.smoker,
        smoker_how_long: req.body.habits.smoker_how_long,
        cigarettes_a_day: req.body.habits.cigarettes_a_day,
        alcoholism: req.body.habits.alcoholism,
        frequency_alcoholism: req.body.habits.frequency_alcoholism,
        type_alcoholism: req.body.habits.type_alcoholism,
        amount_of_alcohol: req.body.habits.amount_of_alcohol,
        //FoodConditions
        limitation_for_food_preparation: req.body.food_conditions.limitation_for_food_preparation,
        current_clinical_condition: req.body.food_conditions.current_clinical_condition,
        food_allergy_or_condition: req.body.food_conditions.food_allergy_or_condition,
        allergy_to_the_following_foods: req.body.food_conditions.allergy_to_the_following_foods,
        use_of_supplements: req.body.food_conditions.use_of_supplements,
        used_supplement: req.body.food_conditions.used_supplement,
        food_aversion: req.body.food_conditions.food_aversion,
        food_preference: req.body.food_conditions.food_preference,
        loss_of_appetite: req.body.food_conditions.loss_of_appetite,
        loss_of_aptitude_time: req.body.food_conditions.loss_of_aptitude_time,
        loss_of_appetite_because: req.body.food_conditions.loss_of_appetite_because,
        changed_diet_consistency: req.body.food_conditions.changed_diet_consistency,
        changed_diet_consistency_time: req.body.food_conditions.changed_diet_consistency_time,
        changed_diet_consistency_because: req.body.food_conditions.changed_diet_consistency_because,
        dining_place: req.body.food_conditions.dining_place,
        who_buys_the_food: req.body.food_conditions.who_buys_the_food,
        who_prepares_the_food: req.body.food_conditions.who_prepares_the_food,
        food_storage: req.body.food_conditions.food_storage,
        way_of_preparing_food: req.body.food_conditions.way_of_preparing_food,
        //AnthropometricAssessment
        size: req.body.anthropometric_assessment.size,
        weight: req.body.anthropometric_assessment.weight,
        //Circumferences
        shoulder: req.body.anthropometric_assessment.circumferences.shoulder,
        waist: req.body.anthropometric_assessment.circumferences.waist,
        hip: req.body.anthropometric_assessment.circumferences.hip,
        left_thigh: req.body.anthropometric_assessment.circumferences.left_thigh,
        left_proximal_thigh: req.body.anthropometric_assessment.circumferences.left_proximal_thigh,
        left_calf: req.body.anthropometric_assessment.circumferences.left_calf,
        right_fist: req.body.anthropometric_assessment.circumferences.right_fist,
        relaxed_right_arm: req.body.anthropometric_assessment.circumferences.relaxed_right_arm,
        right_contracted_arm: req.body.anthropometric_assessment.circumferences.right_contracted_arm,
        right_forearm: req.body.anthropometric_assessment.circumferences.right_forearm,
        breastplate: req.body.anthropometric_assessment.circumferences.breastplate,
        abdomen: req.body.anthropometric_assessment.circumferences.abdomen,
        right_thigh: req.body.anthropometric_assessment.circumferences.right_thigh,
        right_proximal_thigh: req.body.anthropometric_assessment.circumferences.right_proximal_thigh,
        right_calf: req.body.anthropometric_assessment.circumferences.right_calf,
        neck: req.body.anthropometric_assessment.circumferences.neck,
        left_fist: req.body.anthropometric_assessment.circumferences.left_fist,
        relaxed_left_arm: req.body.anthropometric_assessment.circumferences.relaxed_left_arm,
        left_contracted_arm: req.body.anthropometric_assessment.circumferences.left_contracted_arm,
        left_forearm: req.body.anthropometric_assessment.circumferences.left_forearm,
        //SkinFolds
        biceps: req.body.anthropometric_assessment.skin_folds.biceps,
        triceps: req.body.anthropometric_assessment.skin_folds.triceps,
        middle_axillary: req.body.anthropometric_assessment.skin_folds.middle_axillary,
        chest: req.body.anthropometric_assessment.skin_folds.chest,
        middle_calf: req.body.anthropometric_assessment.skin_folds.middle_calf,
        abdominal: req.body.anthropometric_assessment.skin_folds.abdominal,
        suprailiac: req.body.anthropometric_assessment.skin_folds.suprailiac,
        subscapular: req.body.anthropometric_assessment.skin_folds.subscapular,
        thigh: req.body.anthropometric_assessment.skin_folds.thigh,
        //AnthropometricEvaluationResults
        current_bmi: req.body.anthropometric_assessment.anthropometric_evaluation_results.current_bmi,
        recommended_bmi_min: req.body.anthropometric_assessment.anthropometric_evaluation_results.recommended_bmi_min,
        recommended_bmi_max: req.body.anthropometric_assessment.anthropometric_evaluation_results.recommended_bmi_max,
        bmi_situation: req.body.anthropometric_assessment.anthropometric_evaluation_results.bmi_situation,
        ideal_weight: req.body.anthropometric_assessment.anthropometric_evaluation_results.ideal_weight,
        fat_mass_percentage: req.body.anthropometric_assessment.anthropometric_evaluation_results.fat_mass_percentage,
        fat_mass_percentage_recommended: req.body.anthropometric_assessment.anthropometric_evaluation_results.fat_mass_percentage_recommended,
        fat_mass_percentage_situation: req.body.anthropometric_assessment.anthropometric_evaluation_results.fat_mass_percentage_situation,
        percentage_of_lean_mass: req.body.anthropometric_assessment.anthropometric_evaluation_results.percentage_of_lean_mass,
        percentage_of_lean_mass_recommended: req.body.anthropometric_assessment.anthropometric_evaluation_results.percentage_of_lean_mass_recommended,
        percentage_of_lean_mass_situation: req.body.anthropometric_assessment.anthropometric_evaluation_results.percentage_of_lean_mass_situation,
        fat_mass: req.body.anthropometric_assessment.anthropometric_evaluation_results.fat_mass,
        fat_mass_recommended: req.body.anthropometric_assessment.anthropometric_evaluation_results.fat_mass_recommended,
        fat_mass_situation: req.body.anthropometric_assessment.anthropometric_evaluation_results.fat_mass_situation,
        lean_mass: req.body.anthropometric_assessment.anthropometric_evaluation_results.lean_mass,
        lean_mass_recommended: req.body.anthropometric_assessment.anthropometric_evaluation_results.lean_mass_recommended,
        lean_mass_situation: req.body.anthropometric_assessment.anthropometric_evaluation_results.lean_mass_situation,
        sum_of_folds: req.body.anthropometric_assessment.anthropometric_evaluation_results.sum_of_folds,
        waist_hip_ratio: req.body.anthropometric_assessment.anthropometric_evaluation_results.waist_hip_ratio,
        waist_hip_ratio_situation: req.body.anthropometric_assessment.anthropometric_evaluation_results.waist_hip_ratio_situation,
        arm_muscle_area: req.body.anthropometric_assessment.anthropometric_evaluation_results.arm_muscle_area,
        arm_muscle_area_situation: req.body.anthropometric_assessment.anthropometric_evaluation_results.arm_muscle_area_situation,
        arm_fat_area: req.body.anthropometric_assessment.anthropometric_evaluation_results.arm_fat_area,
        arm_fat_area_situation: req.body.anthropometric_assessment.anthropometric_evaluation_results.arm_fat_area_situation,
        //LaboratoryTests
        glycemia: req.body.laboratory_tests.glycemia,
        plasma_potassium: req.body.laboratory_tests.plasma_potassium,
        total_cholesterol: req.body.laboratory_tests.total_cholesterol,
        hld_cholesterol: req.body.laboratory_tests.hld_cholesterol,
        ldl_cholesterol: req.body.laboratory_tests.ldl_cholesterol,
        hemoglobin: req.body.laboratory_tests.hemoglobin,
        hemoglobin_situation: req.body.laboratory_tests.hemoglobin_situation,
        hematocrit: req.body.laboratory_tests.hematocrit,
        hematocrit_situation: req.body.laboratory_tests.hematocrit_situation,
        vcm: req.body.laboratory_tests.vcm,
        vcm_situation: req.body.laboratory_tests.vcm_situation,
        hmc: req.body.laboratory_tests.hmc,
        hmc_situation: req.body.laboratory_tests.hmc_situation,
        chcm: req.body.laboratory_tests.chcm,
        chcm_situation: req.body.laboratory_tests.chcm_situation,
        leukocyte: req.body.laboratory_tests.leukocyte,
        leukocyte_situation: req.body.laboratory_tests.leukocyte_situation,
        segmented_neutrophils: req.body.laboratory_tests.segmented_neutrophils,
        segmented_neutrophils_situation: req.body.laboratory_tests.segmented_neutrophils_situation,
        lymphocytes: req.body.laboratory_tests.lymphocytes,
        lymphocytes_situation: req.body.laboratory_tests.lymphocytes_situation,
        monocytes: req.body.laboratory_tests.monocytes,
        monocytes_situation: req.body.laboratory_tests.monocytes_situation,
        platelets: req.body.laboratory_tests.platelets,
        platelets_situation: req.body.laboratory_tests.platelets_situation,
        triglycerides: req.body.laboratory_tests.triglycerides,
        triglycerides_situation: req.body.laboratory_tests.triglycerides_situation,
        glucose: req.body.laboratory_tests.glucose,
        glucose_situation: req.body.laboratory_tests.glucose_situation,
        insulin: req.body.laboratory_tests.insulin,
        insulin_situation: req.body.laboratory_tests.insulin_situation,
        uric_acid: req.body.laboratory_tests.uric_acid,
        uric_acid_situation: req.body.laboratory_tests.uric_acid_situation,
        direct_bilirubin: req.body.laboratory_tests.direct_bilirubin,
        direct_bilirubin_situation: req.body.laboratory_tests.direct_bilirubin_situation,
        indirect_bilirubin: req.body.laboratory_tests.indirect_bilirubin,
        indirect_bilirubin_situation: req.body.laboratory_tests.indirect_bilirubin_situation,
        hemoglobin_glicada: req.body.laboratory_tests.hemoglobin_glicada,
        hemoglobin_glicada_situation: req.body.laboratory_tests.hemoglobin_glicada_situation,
        vitamin_d: req.body.laboratory_tests.vitamin_d,
        vitamin_d_situation: req.body.laboratory_tests.vitamin_d_situation,
        rdw: req.body.laboratory_tests.rdw,
        rdw_situation: req.body.laboratory_tests.rdw_situation,
        urea: req.body.laboratory_tests.urea,
        serum_creatine: req.body.laboratory_tests.serum_creatine,
    }

    const dataQuizz = {
        /*questions: req.body.quizz.questions,
        question: req.body.quizz.questions.question,
        options: req.body.quizz.questions.options,
        answer: req.body.quizz.questions.answer*/
    }

    //console.log(dataQuizz.questions.length);

    var questionsList = [];

    /*for (var i = 0; i < dataQuizz.questions.length; i++) {
        dataQuizz.question = req.body.quizz.questions[i].question;
        dataQuizz.options = req.body.quizz.questions[i].options;
        dataQuizz.answer = req.body.quizz.questions[i].answer;
        questionsList.push(dataQuizz.questions[i]);
    }*/

    const result = await createClinicalCase(data, dataQuizz);

    if (result == null) {
        res.status(400).json({"message": "Register Error"});
    } else {
        res.status(200).json(result);
    }
});

module.exports = router;