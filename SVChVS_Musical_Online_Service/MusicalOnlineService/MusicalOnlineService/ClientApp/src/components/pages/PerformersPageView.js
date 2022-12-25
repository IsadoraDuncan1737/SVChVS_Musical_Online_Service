import React, { Component } from 'react';
import { PerformersSection } from '../sections/PerformersSection';

export class PerformersPageView extends Component {
    static displayName = PerformersPageView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <PerformersSection performers={this.props.performers} />
            </>
        );
    }
}
