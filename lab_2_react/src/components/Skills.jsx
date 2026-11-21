function Skills() {
  const skills = [
    "HTML5 — семантична розмітка",
    "CSS3 — Flexbox, Grid",
    "JavaScript (ES6+)",
    "React (базовий рівень)",
    "Git та GitHub",
    "Figma — робота з макетами",
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-gray-100 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">Навички</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;