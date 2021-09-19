function OrderSummaryItem({ title, qty }) {
  return (
    <div className="row small mb-2">
      <div className="col-8 text-truncate">
        {title}
        <span className="text-muted d-block">x{qty}</span>
      </div>
      <div className="col-4 text-end">
        <button type="button" className="btn btn-sm btn-outline-danger">
          &times;
        </button>
      </div>
    </div>
  );
}

export default OrderSummaryItem;
