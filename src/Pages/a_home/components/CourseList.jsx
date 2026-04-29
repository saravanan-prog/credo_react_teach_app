export default function CourseList() {
  const courses = [
    "Full-stack",
    "MEAN stack",
    "MERN stack",
    "cloud",
    "AI",
    "Machine Learnings",
  ];

  return (
    <div>
      <div> Courses </div>
      <nav>
        <ul>
          {courses.map((value, key) => (
            <li key={key}> {value} </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
