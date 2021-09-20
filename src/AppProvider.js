import React from "react";
import { AppContext } from ".";

class AppProvider extends React.Component {
  state = {};

  render() {
    return (
      <AppContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
