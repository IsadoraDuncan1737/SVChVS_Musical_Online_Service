import React, { Component } from 'react';
import { PerformerCardView } from './PerformerCardView';

export class PerformerCard extends Component {
    static displayName = PerformerCard.name;

    constructor(props) {
        super(props);

        this.state = {
            genres: "",
            albums: []
        }

        this.splitGenres = this.splitGenres.bind(this);
        this.getAlbums = this.getAlbums.bind(this);
    }

    componentDidMount() {
        this.splitGenres();
        this.getAlbums();
    }

    render() {
        let splittedGenres = this.state.genres === "" ? false : true;
        let loadedAlbums = this.state.albums === [] ? false : true;

        let contents = splittedGenres && loadedAlbums
            ? <PerformerCardView
                performer={this.props.performer}
                genres={this.state.genres}
                albums={ this.state.albums}
            />
            : <div />
        return (
            <>
                {contents}
            </>
        );
    }

    splitGenres() {
        let splitGenres = this.props.performer.genres.split(", ");

        this.setState({ genres: splitGenres})
    }

    async getAlbums() {
        const response = await fetch(`album/get-albums-by-performer-id?id=${this.props.performer.id}`);
        const data = await response.json();

        this.setState({ albums: data });
    }
}
