import { Router } from "express";
import { getInstructors, getInstructorByName } from "../controllers/instructorController.js";

const router = Router();

router.get("/", getInstructors);
router.get("/:name", getInstructorByName);

export default router;
