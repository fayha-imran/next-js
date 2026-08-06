import * as Student from "../models/studentModel.js";

/**
 * GET /api/students
 * Returns all students. Supports optional ?search and ?course query params.
 */
export const getAllStudents = (req, res, next) => {
  try {
    const { search, course } = req.query;
    let result = Student.findAll();

    if (course) {
      result = result.filter((s) =>
        s.course?.toLowerCase().includes(course.toLowerCase())
      );
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q)
      );
    }

    res.status(200).json({ count: result.length, students: result });
  } catch (err) {
    next(err);
  }
};

/**
 * GET /api/students/:id
 * Returns a single student by ID.
 */
export const getStudentById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID. ID must be a number." });
    }

    const student = Student.findById(id);
    if (!student) {
      return res.status(404).json({ error: `Student with ID ${id} not found.` });
    }

    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/students
 * Creates a new student. Body: { name, email, age?, course?, gpa? }
 */
export const createStudent = (req, res, next) => {
  try {
    const { name, email, age, course, gpa } = req.body;

    // Check for duplicate email
    const existing = Student.findByEmail(email.trim());
    if (existing) {
      return res.status(409).json({
        error: "Conflict",
        message: `A student with email '${email}' already exists.`,
      });
    }

    const student = Student.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      age: age !== undefined ? parseInt(age, 10) : undefined,
      course: course?.trim() || null,
      gpa: gpa !== undefined ? parseFloat(parseFloat(gpa).toFixed(2)) : undefined,
    });

    res.status(201).json({ message: "Student created successfully.", student });
  } catch (err) {
    next(err);
  }
};

/**
 * PUT /api/students/:id
 * Updates an existing student. Body: any subset of { name, email, age, course, gpa }
 */
export const updateStudent = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID. ID must be a number." });
    }

    const existing = Student.findById(id);
    if (!existing) {
      return res.status(404).json({ error: `Student with ID ${id} not found.` });
    }

    const { name, email, age, course, gpa } = req.body;

    // If email is being changed, check it's not taken by another student
    if (email && email.trim().toLowerCase() !== existing.email) {
      const taken = Student.findByEmail(email.trim());
      if (taken) {
        return res.status(409).json({
          error: "Conflict",
          message: `Email '${email}' is already in use by another student.`,
        });
      }
    }

    const updates = {};
    if (name !== undefined) updates.name = name.trim();
    if (email !== undefined) updates.email = email.trim().toLowerCase();
    if (age !== undefined) updates.age = parseInt(age, 10);
    if (course !== undefined) updates.course = course.trim();
    if (gpa !== undefined) updates.gpa = parseFloat(parseFloat(gpa).toFixed(2));

    const updated = Student.update(id, updates);
    res.status(200).json({ message: "Student updated successfully.", student: updated });
  } catch (err) {
    next(err);
  }
};

/**
 * DELETE /api/students/:id
 * Deletes a student by ID.
 */
export const deleteStudent = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID. ID must be a number." });
    }

    const deleted = Student.remove(id);
    if (!deleted) {
      return res.status(404).json({ error: `Student with ID ${id} not found.` });
    }

    res.status(200).json({ message: `Student with ID ${id} deleted successfully.` });
  } catch (err) {
    next(err);
  }
};
