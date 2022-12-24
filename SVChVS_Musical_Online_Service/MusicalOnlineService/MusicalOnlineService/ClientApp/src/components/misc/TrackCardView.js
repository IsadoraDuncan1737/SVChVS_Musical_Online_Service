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
            <Card>
                <Card.Img src="/Performers/default/default/default.jpg" />
                <Card.Header>
                    <a className="track-title" href="">{this.props.track.title}</a>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <a className="performer-name" href="">{this.props.performerName}</a>
                    </Card.Title>
                    <Card.Subtitle>
                        <a className="album-title" href=""> {this.props.albumTitle} </a>
                    </Card.Subtitle>
                    <ReactAudioPlayer src={"/Performers/default/default/default.mp3"} controls />
                </Card.Body>
                <Card.Footer>
                    {this.props.genres.map((_, id) => (
                        <a key={id} href={`genres/${_}`}>{ _}</a>
                        ))}
                </Card.Footer>
            </Card>
        );
    }
}
