import React, { Component } from 'react';
import { TracksSection } from '../sections/TracksSection';

export class TracksPageView extends Component {
    static displayName = TracksPageView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <TracksSection tracks={this.props.tracks} />
            </>
        );
    }
}
