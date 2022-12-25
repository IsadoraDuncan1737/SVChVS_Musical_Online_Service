import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TrackCard } from '../cards/TrackCard';

import '../../stylesheets/section.css'

export class TracksSection extends Component {
    static displayName = TracksSection.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                        <Row>
                <h3>Треки</h3>
                </Row>
            <Row>
                {this.props.tracks.map((_, id) => (
                    <Col key={id}>
                        <TrackCard track={_}/>
                        </Col>
                    ))}
                </Row>
                </>
        );
    }
}
