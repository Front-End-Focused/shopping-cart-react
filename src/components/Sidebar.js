import OrderSummaryDelivery from "./OrderSummary/OrderSummaryDelivery";
import OrderSummaryDiscount from "./OrderSummary/OrderSummaryDiscount";
import OrderSummaryTotal from "./OrderSummary/OrderSummaryTotal";
import OrderSummaryItemsList from "./OrderSummary/OrderSummaryItemsList";

function Sidebar({ items }) {
  return (
    <aside className="col-4">
      <header className="mb-5 text-muted">
        <h2>Order Summary</h2>
      </header>

      <div className="order-summary card">
        <div className="card-body">
          <div className="order-summary-items">
            <OrderSummaryItemsList items={items} />
          </div>
          <hr />
          <div className="order-summary-delivery">
            <OrderSummaryDelivery deliveryCharge="0" />
            <OrderSummaryDiscount totalDiscount="0" />
          </div>
          <hr />
          <div className="order-summary-total">
            <OrderSummaryTotal grandTotal="0" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
