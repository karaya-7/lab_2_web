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
    <section>
      <h2>Навички</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;