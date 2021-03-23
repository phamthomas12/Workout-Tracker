const router = require("express").Router();
const Workout = require("../models/workout.js");

// get workout
module.exports = router => {
    router.get("/api/workouts", (req, res) => {
        Workout.find({}).then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

    });

};