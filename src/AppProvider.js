import React from "react";
import { AppContext } from ".";

class AppProvider extends React.Component {
  state = {
    items: {
      item1: {
        id: 1,
        title: "100pcs Black Nitrile Gloves Kitchen",
        price: 10.99,
        qty: 1,
      },
      item2: {
        id: 2,
        title: "SOUL PLUS FACE Masks",
        price: 16.13,
        qty: 1,
      },
      item3: {
        id: 3,
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

  render() {
    return (
      <AppContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
