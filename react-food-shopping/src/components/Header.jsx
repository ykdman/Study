import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    // header
    <header id="main-header">
      {/* title & image */}
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>React Food!</h1>
      </div>
      {/* Cart Butotn */}
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
