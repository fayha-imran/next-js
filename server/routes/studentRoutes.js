import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";
import {
  validateCreateStudent,
  validateUpdateStudent,
} from "../middleware/validate.js";

const router = Router();

// GET /api/students         - list all (supports ?search=, ?course=)
router.get("/", getAllStudents);

// GET /api/students/:id     - get one by ID
router.get("/:id", getStudentById);

// POST /api/students        - create new student
router.post("/", validateCreateStudent, createStudent);

// PUT /api/students/:id     - update existing student
router.put("/:id", validateUpdateStudent, updateStudent);

// DELETE /api/students/:id  - delete student
router.delete("/:id", deleteStudent);

export default router;
