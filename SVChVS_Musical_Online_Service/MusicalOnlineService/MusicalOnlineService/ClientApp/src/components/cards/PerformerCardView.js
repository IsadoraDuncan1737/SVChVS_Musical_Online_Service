import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import '../../stylesheets/card.css'

export class PerformerCardView extends Component {
    static displayName = PerformerCardView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card bg="dark" text="white">
                <Card.Img src={`/Performers/${this.props.performer.name}/${this.props.performer.name}.jpg`} />
                <Card.Header as="h3">
                    <p>{this.props.performer.name}</p>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <p>Альбомы</p>
                    </Card.Title>
                    {this.props.albums.map((_, id) => (
                        <a key={id} href={`/Albums/${_.title}`}>{_.title}</a>
                    ))}
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
