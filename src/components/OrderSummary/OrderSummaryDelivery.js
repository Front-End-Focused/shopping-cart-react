function OrderSummaryDelivery({ deliveryCharge }) {
  return (
    <div className="row small mb-2">
      <div className="col-8 text-truncate">Delivery</div>
      <div className="col-4 text-end">${deliveryCharge}</div>
    </div>
  );
}

export default OrderSummaryDelivery;
