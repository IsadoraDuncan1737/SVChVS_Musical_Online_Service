import React, { Component } from 'react';
import { AlbumsTableView } from './AlbumsTableView';

export class AlbumsTable extends Component {
    static displayName = AlbumsTable.name;

    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            loaded: false,
        }

        this.getAlbums = this.getAlbums.bind(this);
        this.getAlbumsByPerformerID = this.getAlbumsByPerformerID.bind(this);
    }

    componentDidMount() {
        this.props.performerID === undefined
            ? this.getAlbums()
            : this.getAlbumsByPerformerID()
    }

    render() {
        let contents = this.state.loaded === true
            ? <AlbumsTableView albums={this.state.albums} handleChoose={this.props.handleChoose} />
            : <p>Loading...</p>
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

    async getAlbumsByPerformerID() {
        const response = await fetch(`album/get-albums-by-performer-id?id=${this.props.performerID}`);

        const data = await response.json();

        this.setState({ albums: data, loaded: true });
    }
}
