/**
 * Student Model
 * In-memory data store with helper CRUD functions.
 * Replace the `students` array and these helpers with DB calls in the next session.
 */

let nextId = 1;

// Seed data for demonstration
let students = [
  {
    id: 1,
    name: "Alice Carter",
    email: "alice@example.com",
    age: 22,
    course: "Full-Stack Web Development",
    gpa: 3.8,
    enrolledAt: "2026-01-15T00:00:00.000Z",
  },
  {
    id: 2,
    name: "Bob Nguyen",
    email: "bob@example.com",
    age: 24,
    course: "AI & Deep Learning Engineering",
    gpa: 3.5,
    enrolledAt: "2026-02-01T00:00:00.000Z",
  },
  {
    id: 3,
    name: "Clara Santos",
    email: "clara@example.com",
    age: 21,
    course: "UI/UX & Product Design Masterclass",
    gpa: 3.9,
    enrolledAt: "2026-03-10T00:00:00.000Z",
  },
];

// Keep nextId in sync with seeded data
nextId = students.length + 1;

export const findAll = () => [...students];

export const findById = (id) =>
  students.find((s) => s.id === id) || null;

export const findByEmail = (email) =>
  students.find((s) => s.email.toLowerCase() === email.toLowerCase()) || null;

export const create = ({ name, email, age, course, gpa }) => {
  const newStudent = {
    id: nextId++,
    name,
    email,
    age: age ?? null,
    course: course ?? null,
    gpa: gpa ?? null,
    enrolledAt: new Date().toISOString(),
  };
  students.push(newStudent);
  return newStudent;
};

export const update = (id, fields) => {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return null;
  students[index] = { ...students[index], ...fields };
  return students[index];
};

export const remove = (id) => {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return false;
  students.splice(index, 1);
  return true;
};
