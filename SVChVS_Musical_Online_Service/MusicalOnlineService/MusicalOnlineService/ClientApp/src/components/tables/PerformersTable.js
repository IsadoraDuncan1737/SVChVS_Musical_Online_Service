import React, { Component } from 'react';
import {PerformersTableView} from './PerformersTableView';

export class PerformersTable extends Component {
    static displayName = PerformersTable.name;

    constructor(props) {
        super(props);

        this.state = {
            performers: [],
            loaded: false,
        }

        this.getPerformers = this.getPerformers.bind(this);
        this.getPerformerByAlbumID = this.getPerformerByAlbumID.bind(this);
    }

    componentDidMount() {
        this.props.albumID === undefined
            ? this.getPerformers()
            : this.getPerformerByAlbumID()
    }

    render() {
        let contents = this.state.loaded === true
            ? <PerformersTableView performers={this.state.performers} handleChoose={this.props.handleChoose} />
            : <p>Loading...</p>
        return (
            <>
                { contents}
                </>
        );
    }

    async getPerformers() {
        const response = await fetch('performer/get-all');

        const data = await response.json();

        this.setState({ performers: data, loaded: true  });
    }

    async getPerformerByAlbumID() {
        const response = await fetch(`performer/get-performer-by-album-id?id=${this.props.albumID}`);

        const data = await response.json();

        const arrayData = [data];

        this.setState({ performers: arrayData, loaded: true  });
    }
}
