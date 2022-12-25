import React, { Component } from 'react';
import { AlbumsPageView } from './AlbumsPageView';

export class AlbumsPage extends Component {
    static displayName = AlbumsPage.name;

    constructor(props) {
        super(props);

        this.state = {
            albums: this.props.albums,
            loaded: false
        }

        this.getAlbums = this.getAlbums.bind(this);
        this.getAlbum = this.getAlbum.bind(this);
    }

    componentDidMount() {
        this.props.albums.length === 0
            ? this.props.albumTitle == ""
                ? this.getAlbums()
                : this.getAlbum()
            : this.setState({ loaded: true });
    }

    render() {
        let contents = this.state.loaded ? <AlbumsPageView albums={this.state.albums} /> : <p>Loading...</p>
        return (
            <>
                {contents}
            </>
        );
    }

    async getAlbums() {
        const response = await fetch('album/get-all');

        const data = await response.json();

        this.setState({ albums: data, loaded: true });
    }

    async getAlbum() {
        const response = await fetch(`album/get-album-by-title?title=${this.props.albumTitle}`);

        const data = await response.json();

        const arrayData = [data];

        this.setState({ albums: arrayData, loaded: true });
    }
}
