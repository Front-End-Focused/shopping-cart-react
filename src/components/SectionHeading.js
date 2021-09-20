import { AppContext } from "..";

function SectionHeading() {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <header>
            <h2>Shopping Cart</h2>
            <p className="text-muted">
              You have <strong>{context.state.count}</strong> items in your cart
            </p>
          </header>
        );
      }}
    </AppContext.Consumer>
  );
}

export default SectionHeading;
