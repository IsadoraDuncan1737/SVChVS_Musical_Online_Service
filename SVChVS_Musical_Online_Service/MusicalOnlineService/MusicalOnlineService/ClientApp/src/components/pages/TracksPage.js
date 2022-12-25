import React, { Component } from 'react';
import { TracksPageView } from './TracksPageView';

export class TracksPage extends Component {
    static displayName = TracksPage.name;

    constructor(props) {
        super(props);

        this.state = {
            tracks: this.props.tracks,
            loaded: false
        }

        this.getTracks = this.getTracks.bind(this);
        this.getTrack = this.getTrack.bind(this);
    }

    componentDidMount() {
        this.props.tracks.length === 0
            ? this.props.trackTitle == ""
                ? this.getTracks()
                : this.getTrack()
            : this.setState({ loaded: true });
    }

    render() {
        let contents = this.state.loaded ? <TracksPageView tracks={this.state.tracks} /> : <p>Loading...</p>
        return (
            <>
                {contents}
            </>
        );
    }

    async getTracks() {
        const response = await fetch('track/get-all');

        const data = await response.json();

        this.setState({ tracks: data, loaded: true });
    }

    async getTrack() {
        const response = await fetch(`track/get-track-by-title?title=${this.props.trackTitle}`);

        const data = await response.json();

        const arrayData = [data];

        this.setState({ tracks: arrayData, loaded: true });
    }
}
