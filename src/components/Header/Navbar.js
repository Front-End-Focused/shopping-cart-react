import trolley from "../../trolley.svg";

function Navbar({ totalItems }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Store</span>
        <button type="button" className="btn btn-sm btn-link position-relative">
          <img src={trolley} width="24" alt="trolley" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
