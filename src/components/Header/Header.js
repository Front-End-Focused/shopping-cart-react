import Navbar from "./Navbar";
import Promobar from "./Promobar";

function Header({ totalItems }) {
  return (
    <header>
      <Navbar totalItems={totalItems} />
      <Promobar />
    </header>
  );
}

export default Header;
