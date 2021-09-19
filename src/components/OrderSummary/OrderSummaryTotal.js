function OrderSummaryTotal({ grandTotal }) {
  return (
    <div className="row">
      <strong className="col-8 text-truncate">Order total</strong>
      <strong className="col-4 text-end">${grandTotal}</strong>
    </div>
  );
}

export default OrderSummaryTotal;
