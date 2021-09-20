import React from "react";
import { AppContext } from ".";
import { roundPrice } from "./utils";

class AppProvider extends React.Component {
  state = {
    items: {
      item1: {
        id: "item1",
        title: "100pcs Black Nitrile Gloves Kitchen",
        price: 10.99,
        qty: 1,
      },
      item2: {
        id: "item2",
        title: "SOUL PLUS FACE Masks",
        price: 16.13,
        qty: 1,
      },
      item3: {
        id: "item3",
        title: "Set Sheets Microfiber Super Soft",
        price: 17.99,
        qty: 1,
      },
    },
    itemsCount: {
      item1: 1,
      item2: 1,
      item3: 1,
    },
    count: 3,
    grandTotal: 45.11,
  };

  updateCart = (action = "add", id) => {
    if (action === "add") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        itemsCount: {
          ...prevState.itemsCount,
          [id]: prevState.itemsCount[id] + 1,
        },
        grandTotal: roundPrice(
          prevState.grandTotal + this.state.items[id].price
        ),
      }));
    } else {
      this.setState((prevState) => ({
        count: prevState.count - 1,
        itemsCount: {
          ...prevState.itemsCount,
          [id]: prevState.itemsCount[id] - 1,
        },
        grandTotal: roundPrice(
          prevState.grandTotal - this.state.items[id].price
        ),
      }));
    }
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          updateCart: this.updateCart,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
