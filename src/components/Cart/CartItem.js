import React from "react";

const roundPrice = (num) => Math.round(num * 100) / 100;

function CartItem({ title, qty, price }) {
  const [totalQty, setTotalQty] = React.useState();

  React.useEffect(() => {
    setTotalQty(qty);
  }, [qty]);

  function addOneItem() {
    setTotalQty(totalQty + 1);
  }

  function removeOneItem() {
    if (totalQty === 1) return;
    setTotalQty(totalQty - 1);
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-7">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle text-muted">${price}</h6>
          </div>
          <div className="col-3">
            <div className="input-group">
              <button
                className="btn btn-sm"
                type="button"
                onClick={removeOneItem}
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center form-control-qty"
                placeholder="Qty"
                aria-label="Quantity"
                defaultValue={totalQty}
                readOnly
              />

              <button
                className="btn btn-sm form-control-sm"
                type="button"
                onClick={addOneItem}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-2 text-end">${roundPrice(totalQty * price)}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
