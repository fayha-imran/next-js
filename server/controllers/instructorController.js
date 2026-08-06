import { instructors } from "../data/mockData.js";

export const getInstructors = (req, res) => {
  res.json(instructors);
};

export const getInstructorByName = (req, res) => {
  const { name } = req.params;
  const decodedName = decodeURIComponent(name).toLowerCase();
  
  const instructor = instructors.find(
    (inst) => inst.name.toLowerCase() === decodedName
  );

  if (!instructor) {
    return res.status(404).json({ error: `Instructor with name '${name}' not found` });
  }

  res.json(instructor);
};
