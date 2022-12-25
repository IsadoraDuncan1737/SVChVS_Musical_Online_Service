import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PerformersPage } from './components/pages/PerformersPage';
import { TracksPage } from './components/pages/TracksPage';
import { AlbumsPage } from './components/pages/AlbumsPage';
import { PerformersPageWrapper } from './components/pages/PerformersPageWrapper';
import { AlbumsPageWrapper } from './components/pages/AlbumsPageWrapper';
import { TracksPageWrapper } from './components/pages/TracksPageWrapper';

import './stylesheets/custom.css'

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props)

        this.state = {
            currentPerformers: [],
            currentAlbums: [],
            currentTracks: []
        }
    }

    render() {
        return (
            <Layout>
                <Router>
                    <Routes>
                        <Route path='/Tracks' element={<TracksPage tracks={this.state.currentTracks} trackTitle=""/>} />
                        <Route path='/Tracks/:title' element={<TracksPageWrapper />} />
                        <Route path='/Performers' element={<PerformersPage performers={this.state.currentPerformers} performerName="" />} />
                        <Route path='/Performers/:name' element={<PerformersPageWrapper />} />
                        <Route path='/Albums' element={<AlbumsPage albums={this.state.currentAlbums} albumTitle="" />} />
                        <Route path='/Albums/:title' element={<AlbumsPageWrapper />} />
                    </Routes>
                </Router>
            </Layout>
        );
    }
}
