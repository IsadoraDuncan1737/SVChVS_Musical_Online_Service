import React, { Component } from 'react';
import { HomePageView } from './HomePageView';

export class HomePage extends Component {
    static displayName = HomePage.name;

    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            performers: [],
            tracks: [],
        }

        this.getAlbums = this.getAlbums.bind(this);
        this.getTracks = this.getTracks.bind(this);
        this.getPerformers = this.getPerformers.bind(this);
    }

    componentDidMount() {
        this.getAlbums();
        this.getTracks();
        this.getPerformers();
    }

    render() {
        let contents = this.state.albums === [] && this.state.performers === [] && this.state.tracks === {}
            ? <p>Loading...</p>
            : <HomePageView
                albums={this.state.albums}
                performers={this.state.performers}
                tracks={this.state.tracks}
            />
        return (
            <>
                {contents}
            </>
        );
    }

    async getAlbums() {
        const response = await fetch('album/get-albums-range?range=5');

        const data = await response.json();

        this.setState({ albums: data });
    }

    async getPerformers() {
        const response = await fetch('performer/get-performers-range?range=5');

        const data = await response.json();

        this.setState({ performers: data });
    }

    async getTracks() {
        const response = await fetch('track/get-tracks-range?range=5');

        const data = await response.json();

        this.setState({ tracks: data });
    }
}
