const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please select cardio or resistance"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter a name for this exercise"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }          
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;