const router = require("express").Router();
const Workout = require("../models/workout");

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
// create a new workout
    router.post("/api/workouts", (req, res) => {
        Workout.create({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err)
        });
    });

// add exercise to a previously created workout
    router.put("/api/workouts/:id", (req, res) => {
        Workout.findOneAndUpdate(
            {
                _id: req.params.id
            },
            { $push: { exercises: req.body } },
            { new: true })
            .then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    });


// view combined weight of multiple exercises
    router.get("/api/workouts/range", (req, res) => {
        Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
};