import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AlbumsSection } from '../sections/AlbumsSection';
import { TracksSection } from '../sections/TracksSection';
import { PerformersSection } from '../sections/PerformersSection';

export class HomePageView extends Component {
    static displayName = HomePageView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col>
                    <AlbumsSection albums={ this.props.albums}/>
                </Col>
                <Col>
                    <TracksSection tracks={ this.props.tracks}/>
                </Col>
                <Col>
                    <PerformersSection performers={ this.props.performers}/>
                </Col>
            </Row>
        );
    }
}
