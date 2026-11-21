function Header() {
  return (
    <header className="flex flex-col items-center bg-slate-800 text-white p-8 rounded-b-xl shadow-lg mb-6">
      <h1 className="text-4xl font-extrabold tracking-wide mb-2">Іванчук Роман</h1>
      <p className="text-xl text-blue-300 font-semibold mb-2">Junior Frontend Developer</p>
      <p className="text-slate-300">📍 Львів, Україна</p>
      <div className="flex gap-4 mt-3 text-sm">
        <a href="mailto:rivanchyk04032008@gmail.com" className="hover:text-blue-400 transition-colors">📧 Email</a>
        <a href="https://github.com/karaya-7" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">💻 GitHub</a>
      </div>
    </header>
  );
}
export default Header;