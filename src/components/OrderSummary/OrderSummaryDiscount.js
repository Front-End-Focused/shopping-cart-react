function OrderSummaryDiscount({ totalDiscount }) {
  return (
    <div className="row small">
      <div className="col-8 text-truncate">Discount</div>
      <div className="col-4 text-end">${totalDiscount}</div>
    </div>
  );
}

export default OrderSummaryDiscount;
