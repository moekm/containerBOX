import Button from "../UI/Button";
import SiteLogo from "../UI/SiteLogo";

export default function Header() {
  return (
    <header>
      <SiteLogo />

      <nav>
        <ul>
          <li>
            <Button href="#pricing" id="type-text">
              Pricing
            </Button>
          </li>
          <li>
            <Button href="#FAQ" id="type-text">
              FAQ
            </Button>
          </li>
          <li>
            <Button href="#contact" id="type-text">
              Contact
            </Button>
          </li>
        </ul>
      </nav>

      <Button to="/dashboard">Try it {">"}</Button>
    </header>
  );
}
