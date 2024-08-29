import PatternController from "../controllers/pattern.controller.js";
import { Router } from "express";

const patternRouter = Router();

patternRouter.route("/patterns")
    .get(PatternController.getAll)
    .post(PatternController.createNew)

patternRouter.route("/patterns/:id")
    .get(PatternController.getOne)
    .put(PatternController.update)
    .delete(PatternController.delete)

export default patternRouter;