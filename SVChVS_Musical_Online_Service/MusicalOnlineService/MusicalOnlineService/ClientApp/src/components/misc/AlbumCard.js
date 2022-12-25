import React, { Component } from 'react';
import { AlbumCardView } from './AlbumCardView';

export class AlbumCard extends Component {
    static displayName = AlbumCard.name;

    constructor(props) {
        super(props);

        this.state = {
            genres: "",
            tracks: "",
            performerName: "",
        }

        this.splitGenres = this.splitGenres.bind(this);
        this.getPerformerName = this.getPerformerName.bind(this);
        this.getTracks = this.getTracks.bind(this);
    }

    componentDidMount() {
        this.splitGenres();
        this.getTracks();
        this.getPerformerName();
    }

    render() {
        let loadedPerformer = this.state.performerName === "" ? false : true;
        let loadedTracks = this.state.tracks.length === 0 ? false : true;
        let splittedGenres = this.state.genres === "" ? false : true;

        let contents = loadedPerformer && loadedTracks && splittedGenres
            ? <AlbumCardView
                album={this.props.album}
                genres={this.state.genres}
                performerName={this.state.performerName}
                tracks={this.state.tracks}
            />
            : <div />
        return (
            <>
                {contents}
            </>
        );
    }

    splitGenres() {
        let splitGenres = this.props.album.genres.split(", ");

        this.setState({ genres: splitGenres})
    }

    async getPerformerName() {
        const response = await fetch(`performer/get?id=${this.props.album.performerId}`);

        const data = await response.json();

        this.setState({ performerName: data.name});
    }

    async getTracks() {
        const response = await fetch(`track/get-tracks-by-album-id?id=${this.props.album.id}`);

        const data = await response.json();

        this.setState({ tracks: data});
    }
}
