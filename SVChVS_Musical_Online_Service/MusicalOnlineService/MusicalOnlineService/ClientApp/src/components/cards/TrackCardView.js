import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Card from 'react-bootstrap/Card';

import '../../stylesheets/card.css'

export class TrackCardView extends Component {
    static displayName = TrackCardView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card bg="dark" text="white">
                <Card.Img src={`/Performers/${this.props.track.performerName}/${this.props.track.albumTitle}/${this.props.track.albumTitle}.jpg`} />
                <Card.Header as="h3">
                    <a className="performer-name" href={`/Performers/${this.props.track.performerName}`}>{this.props.track.performerName}</a>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <p>{this.props.track.title}</p>
                    </Card.Title>
                    <Card.Subtitle>
                        <a className="album-title" href={`/Albums/${this.props.track.albumTitle}`}> ({this.props.track.albumTitle}) </a>
                    </Card.Subtitle>
                    <ReactAudioPlayer src={`/Performers/${this.props.track.performerName}/${this.props.track.albumTitle}/${this.props.track.title}.mp3`} controls />
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
