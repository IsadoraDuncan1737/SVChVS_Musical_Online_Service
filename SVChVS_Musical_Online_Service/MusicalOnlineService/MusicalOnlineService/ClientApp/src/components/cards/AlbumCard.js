import React, { Component } from 'react';
import { AlbumCardView } from './AlbumCardView';

export class AlbumCard extends Component {
    static displayName = AlbumCard.name;

    constructor(props) {
        super(props);

        this.state = {
            genres: "",
            tracks: [],
        }

        this.splitGenres = this.splitGenres.bind(this);
        this.getTracks = this.getTracks.bind(this);
    }

    componentDidMount() {
        this.splitGenres();
        this.getTracks();
    }

    render() {
        let loadedTracks = this.state.tracks === [] ? false : true;
        let splittedGenres = this.state.genres === "" ? false : true;

        let contents = loadedTracks && splittedGenres
            ? <AlbumCardView
                album={this.props.album}
                genres={this.state.genres}
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

    async getTracks() {
        const response = await fetch(`track/get-tracks-by-album-id?id=${this.props.album.id}`);

        const data = await response.json();

        this.setState({ tracks: data});
    }
}
