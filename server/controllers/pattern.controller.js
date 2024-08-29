import Pattern from "../models/pattern.model.js";

const PatternController = {
    "createNew": async (req, res) => {
        try {
            const newPattern = await Pattern.create(req.body);
            res.json(newPattern);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getAll": async (req, res) => {
        try {
            const allPatterns = await Pattern.find();
            res.json(allPatterns);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getOne": async (req, res) => {
        try {
            const pattern = await Pattern.findById(req.params.id);
            res.json(pattern);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "update": async (req, res) => {
        try {
            const options = {
                "new": true,
                "runValidators": true
            };
            const updatedPattern = await Pattern.findByIdAndUpdate(req.params.id, req.body, options);
            res.json(updatedPattern);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "delete": async (req, res) => {
        try {
            const deletedPattern = await Pattern.findByIdAndDelete(req.params.id);
            res.json(deletedPattern);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}

export default PatternController;