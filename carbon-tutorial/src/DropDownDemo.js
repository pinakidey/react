import React, { Component } from "react";
import "./App.scss";
import { Dropdown } from "carbon-components-react";

class DropDownDemo extends Component {
    render() {
        return (
            <div className="App">
                <div style={{ width: 300 }}>
                    <Dropdown
                        ariaLabel="Dropdown"
                        id="carbon-dropdown-example"
                        items={[
                            {
                                value: "option-1",
                                label: "Option 1"
                            },
                            {
                                value: "option-2",
                                label: "Option 2"
                            },
                            {
                                value: "option-3",
                                label: "Option 3"
                            },
                            {
                                value: "option-4",
                                label: "Option 4"
                            }
                        ]}
                        label="Dropdown menu options"
                        onChange={this.onDropdownUpdate}
                        titleText="Dropdown title."
                        type="default"
                    />
                </div>
            </div>
        );
    }
    onDropdownUpdate(selected) {
        alert(selected.selectedItem.label);
    }
}

export default DropDownDemo;
