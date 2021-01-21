import React, { Component } from "react";
import "./App.scss";
import { DataTable } from "carbon-components-react";

const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader
} = DataTable;

const initialRows = [
    {
        attached_groups: "Kevins VM Groups",
        id: "a",
        name: "Load Balancer 3",
        port: 3000,
        protocol: "HTTP",
        rule: "Round robin",
        status: "Disabled"
    },
    {
        attached_groups: "Maureens VM Groups",
        id: "b",
        name: "Load Balancer 1",
        port: 443,
        protocol: "HTTP",
        rule: "Round robin",
        status: "Starting"
    },
    {
        attached_groups: "Andrews VM Groups",
        id: "c",
        name: "Load Balancer 2",
        port: 80,
        protocol: "HTTP",
        rule: "DNS delegation",
        status: "Active"
    },
    {
        attached_groups: "Marcs VM Groups",
        id: "d",
        name: "Load Balancer 6",
        port: 3000,
        protocol: "HTTP",
        rule: "Round robin",
        status: "Disabled"
    },
    {
        attached_groups: "Mels VM Groups",
        id: "e",
        name: "Load Balancer 4",
        port: 443,
        protocol: "HTTP",
        rule: "Round robin",
        status: "Starting"
    },
    {
        attached_groups: "Ronjas VM Groups",
        id: "f",
        name: "Load Balancer 5",
        port: 80,
        protocol: "HTTP",
        rule: "DNS delegation",
        status: "Active"
    }
];

const headers = [
    {
        header: "Name",
        key: "name"
    },
    {
        header: "Protocol",
        key: "protocol"
    },
    {
        header: "Port",
        key: "port"
    },
    {
        header: "Rule",
        key: "rule"
    },
    {
        header: "Attached Groups",
        key: "attached_groups"
    },
    {
        header: "Status",
        key: "status"
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <DataTable
                    isSortable
                    rows={initialRows}
                    headers={headers}
                    render={({ rows, headers, getHeaderProps }) => (
                        <TableContainer title="DataTable">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {headers.map(header => (
                                            <TableHeader {...getHeaderProps({ header })}>
                                                {header.header}
                                            </TableHeader>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.id}>
                                            {row.cells.map(cell => (
                                                <TableCell key={cell.id}>{cell.value}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                />
            </div>
        );
    }
}

export default App;
