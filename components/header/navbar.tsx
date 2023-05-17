export default function Navbar() {
  return (
    <nav
      className={`
            flex 
            items-center justify-between py-5 
            text-white
        `}
    >
      <div className="flex">
        <p className="font-oswald">Freud</p>
        <p className="mx-1">|</p>
        <p className="font-serif text-secondary">Psychoanalysis</p>
      </div>
      <ul></ul>
    </nav>
  );
}
