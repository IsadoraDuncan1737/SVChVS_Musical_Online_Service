import React, { Component } from 'react';
import {TrackCardView}  from './TrackCardView';

export class TrackCard extends Component {
    static displayName = TrackCard.name;

    constructor(props) {
        super(props);

        this.state = {
            genres: "",
        }

        this.splitGenres = this.splitGenres.bind(this);
    }

    componentDidMount() {
        this.splitGenres();
    }

    render() {
        let splittedGenres = this.state.genres === "" ? false : true;

        let contents = splittedGenres
            ? <TrackCardView
                track={this.props.track}
                genres={this.state.genres}
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

        this.setState({ genres: splitGenres })
    }
}
