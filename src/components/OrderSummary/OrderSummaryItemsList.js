import OrderSummaryItem from "./OrderSummaryItem";

function OrderSummaryItemsList({ items }) {
  return Object.keys(items).map((key) => (
    <OrderSummaryItem key={key} {...items[key]} />
  ));
}

export default OrderSummaryItemsList;
