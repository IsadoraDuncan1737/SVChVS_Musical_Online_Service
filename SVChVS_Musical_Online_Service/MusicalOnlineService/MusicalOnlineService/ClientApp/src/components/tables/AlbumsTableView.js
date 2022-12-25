import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class AlbumsTableView extends Component {
    static displayName = AlbumsTableView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Исполнитель</th>
                        <th>Жанры</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.albums.map((_, id) => (
                        <tr key="id" onClick={() => { this.props.handleChoose(_) }}>
                            <td>{id + 1}</td>
                            <td>{_.title}</td>
                            <td>{_.performerName}</td>
                            <td>{_.genres}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}
