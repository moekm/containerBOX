import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <svg
        width="64"
        height="76"
        viewBox="0 0 64 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.0982 0C37.467 0 43.6439 5.71588 50.7796 12.702L63.7787 25.4946L63.9078 38.8014L64 52.0478L44.6211 64.0541C33.9453 70.5866 24.9473 76 24.5785 76C24.2097 75.9395 18.5491 69.0139 12.0588 60.546L0.221261 45.1222L0.0921924 31.7246L0 18.2666L2.6367 17.0267C4.13022 16.3613 12.3353 12.2483 20.8724 7.9236C29.4094 3.65937 36.7295 0.0907282 37.0982 0ZM2.08355 21.9865C1.89917 21.9865 1.84385 22.5308 1.93604 23.2869C2.02823 23.9522 6.82224 29.8193 12.6672 36.3518L23.1956 48.2372V60.183C23.1956 71.6753 23.2325 72.1894 24.1175 72.1894C24.9473 72.1894 25.0395 71.5846 25.1317 60.2435L25.2792 48.2977L43.0354 38.2571C52.8263 32.7831 60.9392 28.0048 61.0867 27.7628C62.4327 25.6458 58.155 27.5511 42.3901 36.2913L24.1544 46.4831L13.2573 34.2348C7.2832 27.4604 2.23106 21.9865 2.08355 21.9865Z"
          fill="#2e6c92"
        />
      </svg>

      <nav>
        <ul>
          <li>
            <a href="#pricing">
              <button id="type-text">Pricing</button>
            </a>
          </li>
          <li>
            <a href="#FAQ">
              <button id="type-text">FAQ</button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <button id="type-text">Contact</button>
            </a>
          </li>
        </ul>
      </nav>

      <Link to="/dashboard">
        <button>Try it {">"}</button>
      </Link>
    </header>
  );
}
