import React, { Component } from "react";
import "./App.scss";
import { Button, Loading } from "carbon-components-react";
import DataTableDemo from "./DataTableDemo";
import DropDownDemo from "./DropDownDemo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showTable: false,
      showDataTable: false,
      showLoader: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLoader: !this.state.showLoader });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.showLoader && (
          <Loading
            active
            className="some-class"
            description="Active loading indicator"
            small={false}
            withOverlay={false}
          />
        )}
        {!this.state.showLoader && (
          <div>
            <Button
              onClick={() => {
                this.setState({ showDropDown: !this.state.showDropDown });
              }}
            >
              Toggle DropDown
            </Button>
            <Button
              onClick={() => {
                this.setState({ showTable: !this.state.showTable });
              }}
            >
              Toggle DataTable
            </Button>
          </div>
        )}

        {this.state.showDropDown && <DropDownDemo />}
        {this.state.showTable && <DataTableDemo />}
      </div>
    );
  }
}

export default App;
