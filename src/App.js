import "./App.css";
import CartItemsList from "./components/Cart/CartItemsList";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import SectionHeading from "./components/SectionHeading";
import data from "./components/data";

function App() {
  return (
    <div className="App">
      <Header totalItems="3" />
      <div className="container mt-5">
        <div className="row">
          <section className="col-8">
            <SectionHeading totalItems="3" />
            <CartItemsList items={data.items} />
          </section>
          <Sidebar items={data.items} />
        </div>
      </div>
    </div>
  );
}

export default App;
