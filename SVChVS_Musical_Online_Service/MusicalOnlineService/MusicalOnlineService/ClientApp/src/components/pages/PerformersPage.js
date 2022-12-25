import React, { Component } from 'react';
import { PerformersPageView } from './PerformersPageView';

export class PerformersPage extends Component {
    static displayName = PerformersPage.name;

    constructor(props) {
        super(props);

        this.state = {
            performers: this.props.performers,
            loaded: false,
        }

        this.getPerformers = this.getPerformers.bind(this);
        this.getPerformer = this.getPerformer.bind(this);
    }

    componentDidMount() {
        this.props.performers.length === 0
            ? this.props.performerName == ""
                ? this.getPerformers()
                : this.getPerformer()
            : this.setState({ loaded: true });
    }

    render() {
        let contents = this.state.loaded ? <PerformersPageView performers={this.state.performers} /> : <p>Loading...</p>
        return (
            <>
                {contents}
            </>
        );
    }

    async getPerformers() {
        const response = await fetch('performer/get-all');

        const data = await response.json();

        this.setState({ performers: data, loaded: true });
    }

    async getPerformer() {
        const response = await fetch(`performer/get-performer-by-name?name=${this.props.performerName}`);

        const data = await response.json();

        const arrayData = [data];

        this.setState({ performers: arrayData, loaded: true });
    }
}
