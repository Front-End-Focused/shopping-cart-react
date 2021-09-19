function SectionHeading({ totalItems }) {
  return (
    <header>
      <h2>Shopping Cart</h2>
      <p className="text-muted">
        You have <strong>{totalItems}</strong> items in your cart
      </p>
    </header>
  );
}

export default SectionHeading;
