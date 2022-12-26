import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class PerformersTableView extends Component {
    static displayName = PerformersTableView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Имя</th>
                        <th>Жанры</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.performers.map((_, id) => (
                        <tr key={id} onClick={() => { this.props.handleChoose(_) }}>
                            <td>{id + 1}</td>
                            <td>{_.name}</td>
                            <td>{_.genres}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}
