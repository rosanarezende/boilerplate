
import './Header.css';

export default function Header() {
  const theme = 'black';

  return (
    <header className={`theme-${theme}`}>
      <h1>React</h1>

      <div>
        {/* <button>Escuro</button>
        <button>Claro</button> */}
      </div>
    </header>
  );
}
