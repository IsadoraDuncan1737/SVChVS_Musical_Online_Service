import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AlbumCard } from '../misc/AlbumCard';

import '../../stylesheets/section.css'

export class AlbumsSection extends Component {
    static displayName = AlbumsSection.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                {this.props.albums.map((_, id) => (
                    <Col key={id}>
                        <AlbumCard album={_} />
                        </Col>
                    ))}
                </Row>
        );
    }
}
