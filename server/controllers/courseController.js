import { courses } from "../data/mockData.js";

export const getCourses = (req, res) => {
  const { search, category } = req.query;
  let filtered = [...courses];

  if (category && category !== "All") {
    filtered = filtered.filter(
      (course) => course.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.subtitle.toLowerCase().includes(query)
    );
  }

  res.json(filtered);
};

export const getCourseBySlug = (req, res) => {
  const { slug } = req.params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return res.status(404).json({ error: `Course with slug '${slug}' not found` });
  }

  res.json(course);
};
