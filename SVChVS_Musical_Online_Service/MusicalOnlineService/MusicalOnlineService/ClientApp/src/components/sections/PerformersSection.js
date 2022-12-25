import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PerformerCard } from '../misc/PerformerCard';

import '../../stylesheets/section.css'

export class PerformersSection extends Component {
    static displayName = PerformersSection.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                {this.props.performers.map((_, id) => (
                    <Col key={id}>
                        <PerformerCard performer={_}/>
                        </Col>
                    ))}
                </Row>
        );
    }
}
