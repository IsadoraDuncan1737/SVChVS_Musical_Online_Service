import React, { Component } from 'react';
import {TrackCardView}  from './TrackCardView';

export class TrackCard extends Component {
    static displayName = TrackCard.name;

    constructor(props) {
        super(props);

        this.state = {
            genres: "",
            performerName: "",
            albumTitle: "",
        }

        this.splitGenres = this.splitGenres.bind(this);
        this.getPerformerName = this.getPerformerName.bind(this);
        this.getAlbumTitle = this.getAlbumTitle.bind(this);
    }

    componentDidMount() {
        this.splitGenres();
        this.getAlbumTitle();
        this.getPerformerName();
    }

    render() {
        let loadedPerformer = this.state.performerName === "" ? false : true;
        let loadedAlbum = this.state.albumTitle === "" ? false : true;
        let splittedGenres = this.state.genres === "" ? false : true;

        let contents = loadedPerformer && loadedAlbum && splittedGenres
            ? <TrackCardView
                track={this.props.track}
                genres={this.state.genres}
                performerName={this.state.performerName}
                albumTitle={this.state.albumTitle}
            />
            : <div />
        return (
            <>
                {contents}
            </>
        );
    }

    splitGenres() {
        let splitGenres = this.props.track.genres.split(", ");
        console.log(splitGenres);
        this.setState({ genres: splitGenres})
    }

    async getPerformerName() {
        const response = await fetch(`performer/get?id=${this.props.track.performerId}`);

        const data = await response.json();

        this.setState({ performerName: data.name});
    }

    async getAlbumTitle() {
        const response = await fetch(`album/get?id=${this.props.track.albumId}`);

        const data = await response.json();

        this.setState({ albumTitle: data.title});
    }
}
