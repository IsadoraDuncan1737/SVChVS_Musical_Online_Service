import React, { Component } from 'react';
import { TracksPageView } from './TracksPageView';

export class TracksPage extends Component {
    static displayName = TracksPage.name;

    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
        }

        this.getTracks = this.getTracks.bind(this);
    }

    componentDidMount() {
        this.getTracks();
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
}
