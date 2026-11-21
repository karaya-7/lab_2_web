function Experience() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md mb-6 border border-gray-100 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">Досвід та освіта</h2>

      <article className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700">Pet-проєкти на GitHub</h3>
        <p className="text-sm text-gray-500 italic mb-2">2024 — дотепер</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Розробив адаптивні лендінги на HTML/CSS</li>
          <li>Створив декілька SPA-додатків на React</li>
          <li>Веду публічний репозиторій: <a href="https://github.com/karaya-7" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">github.com/karaya-7</a></li>
        </ul>
      </article>

      <article>
        <h3 className="text-xl font-semibold text-blue-700">Національний університет "Львівська політехніка"</h3>
        <p className="text-sm text-gray-500 italic mb-2">2023 — 2027</p>
        <p className="text-gray-600">Спеціальність: Кібербезпека</p>
      </article>
    </section>
  );
}
export default Experience;