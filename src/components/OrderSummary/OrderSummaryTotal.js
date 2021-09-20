import { AppContext } from "../..";

function OrderSummaryTotal() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="row">
          <strong className="col-8 text-truncate">Order total</strong>
          <strong className="col-4 text-end">
            ${context.state.grandTotal}
          </strong>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default OrderSummaryTotal;
