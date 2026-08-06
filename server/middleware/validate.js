/**
 * Validation middleware for student request bodies.
 * Validates required fields, types, and business rules.
 * Attaches a `validationError` handler to throw structured 400 errors.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates fields for creating a new student (all required fields must be present).
 */
export const validateCreateStudent = (req, res, next) => {
  const errors = [];
  const { name, email, age, gpa } = req.body;

  // name: required, string, min 2 chars
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("'name' is required and must be at least 2 characters.");
  }

  // email: required, valid format
  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    errors.push("'email' is required and must be a valid email address.");
  }

  // age: optional, integer between 16 and 100
  if (age !== undefined) {
    const ageNum = Number(age);
    if (!Number.isInteger(ageNum) || ageNum < 16 || ageNum > 100) {
      errors.push("'age' must be an integer between 16 and 100.");
    }
  }

  // gpa: optional, number between 0.0 and 4.0
  if (gpa !== undefined) {
    const gpaNum = Number(gpa);
    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
      errors.push("'gpa' must be a number between 0.0 and 4.0.");
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: "Validation failed", details: errors });
  }

  next();
};

/**
 * Validates fields for updating an existing student (at least one field must be provided).
 */
export const validateUpdateStudent = (req, res, next) => {
  const errors = [];
  const { name, email, age, gpa } = req.body;

  // Must provide at least one field to update
  const allowedFields = ["name", "email", "age", "course", "gpa"];
  const providedFields = Object.keys(req.body).filter((k) => allowedFields.includes(k));
  if (providedFields.length === 0) {
    return res.status(400).json({
      error: "Validation failed",
      details: [`At least one field must be provided: ${allowedFields.join(", ")}`],
    });
  }

  if (name !== undefined) {
    if (typeof name !== "string" || name.trim().length < 2) {
      errors.push("'name' must be at least 2 characters.");
    }
  }

  if (email !== undefined) {
    if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      errors.push("'email' must be a valid email address.");
    }
  }

  if (age !== undefined) {
    const ageNum = Number(age);
    if (!Number.isInteger(ageNum) || ageNum < 16 || ageNum > 100) {
      errors.push("'age' must be an integer between 16 and 100.");
    }
  }

  if (gpa !== undefined) {
    const gpaNum = Number(gpa);
    if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
      errors.push("'gpa' must be a number between 0.0 and 4.0.");
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: "Validation failed", details: errors });
  }

  next();
};
