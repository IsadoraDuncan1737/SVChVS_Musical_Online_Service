import React, { Component } from 'react';
import { AlbumsSection } from '../sections/AlbumsSection';

export class AlbumsPageView extends Component {
    static displayName = AlbumsPageView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <AlbumsSection albums={this.props.albums} />
            </>
        );
    }
}
