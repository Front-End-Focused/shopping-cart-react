import CartItem from "./CartItem";

function CartItemsList({ items }) {
  return Object.keys(items).map((key) => (
    <CartItem key={key} {...items[key]} />
  ));
}

export default CartItemsList;
