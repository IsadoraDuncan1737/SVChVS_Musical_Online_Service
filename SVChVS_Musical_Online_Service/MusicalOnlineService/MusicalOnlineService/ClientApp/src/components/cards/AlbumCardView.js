import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import '../../stylesheets/card.css'

export class AlbumCardView extends Component {
    static displayName = AlbumCardView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card bg="dark" text="white">
                <Card.Img src={`/Performers/${this.props.album.performerName}/${this.props.album.title}/${this.props.album.title}.jpg`} />
                <Card.Header as="h3">
                    <a className="performer-name" href={`/Performers/${this.props.album.performerName}`}>{this.props.album.performerName}</a>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <p>{ this.props.album.title}</p>
                    </Card.Title>
                        <Row>
                            {this.props.tracks.map((_, id) => (
                                <Col key={ id}>
                                    <a href={ `/Tracks/${_.title}`}>{_.title}</a>
                                    </Col>
                        ))}
                            </Row>
                </Card.Body>
                <Card.Footer>
                    {this.props.genres.map((_, id) => (
                        <p key={id}>{_}</p>
                    ))}
                </Card.Footer>
            </Card>
        );
    }
}
