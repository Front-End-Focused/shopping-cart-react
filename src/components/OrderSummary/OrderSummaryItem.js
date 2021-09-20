import { AppContext } from "../..";

function OrderSummaryItem({ title, id }) {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="row small mb-2">
          <div className="col-8 text-truncate">
            {title}
            <span className="text-muted d-block">
              x{context.state.itemsCount[id]}
            </span>
          </div>
          <div className="col-4 text-end">
            <button type="button" className="btn btn-sm btn-outline-danger">
              &times;
            </button>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default OrderSummaryItem;
