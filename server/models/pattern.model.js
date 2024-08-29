import { model, Schema } from "mongoose";

const PatternSchema = new Schema(
    {
        patternTitle: {
            type: String,
            required: [true, "Pattern Title is required"],
            minlength: [3, "Pattern Title must be at least 3 characters long"],
            maxlength: [20, "Pattern Title can't be longer than 20 characters"]
        },
        patternDesc: {
            type: String,
            required: [true, "Pattern Description is required"],
            minlength: [5, "Pattern Description must be at least 5 characters long"]
        },
        patternType: {
            type: String,
            required: [true, "Pattern Type is required"]
        },
        hookSize: {
            type: String,
            required: [true, "Hook Size is required"]
        },
        yarn: {
            type: String,
            required: [true, "Yarn Color(s) is required"],
            minlength: [3, "Yarn Color(s) must be at least 3 characters long"]
        },
        yarnType: {
            type: String,
            required: [true, "Yarn Type is required"],
            minlength: [3, "Yarn Type must be at least 3 characters long"]
        },
        instructions: {
            type: String,
            required: [true, "Instructions are required"],
            minlength: [3, "Instructions must be at least 3 characters long"]
        },/* !for FDP!
        stitchCount: {
            type: Number,
            required: [true, "Stitch Count is required"],
            min: [1, "Stitch Count must be greater than 1"]
        } */
        instructions2: {
            type: String,
            required: [false]
        },
        instructions3: {
            type: String,
            required: [false]
        },
        instructions4: {
            type: String,
            required: [false]
        },
        instructions5: {
            type: String,
            required: [false]
        },
        instructions6: {
            type: String,
            required: [false]
        },
        instructions7: {
            type: String,
            required: [false]
        },
        instructions8: {
            type: String,
            required: [false]
        },
        instructions9: {
            type: String,
            required: [false]
        },
        instructions10: {
            type: String,
            required: [false]
        }
    },
    { timestamps: true }
);

const Pattern = model("Pattern", PatternSchema);
export default Pattern;