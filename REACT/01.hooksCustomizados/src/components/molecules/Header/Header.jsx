import logo from "../../../assets/react-logo.png";

export default function Header() {
  return (
    <header
      className="flex-center2 mb-16 p-16 primary-600 gap-16">
      <img className="image-100" src={logo} alt="Logo React" />
      <h1>Hooks Customizados</h1>
    </header>
  );
}
