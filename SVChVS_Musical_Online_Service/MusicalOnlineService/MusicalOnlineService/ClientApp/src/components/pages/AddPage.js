import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AddAlbumForm } from '../forms/AddAlbumForm';
import { AddPerformerForm } from '../forms/AddPerformerForm';
import { AddTrackForm } from '../forms/AddTrackForm';

export class AddPage extends Component {
    static displayName = AddPage.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tabs defaultActiveKey="performer" justify>
                <Tab eventKey="performer" title="Исполнитель">
                    <AddPerformerForm />
                </Tab>
                <Tab eventKey="album" title="Альбом">
                    <AddAlbumForm />
                </Tab>
                <Tab eventKey="track" title="Трек">
                    <AddTrackForm />
                </Tab>
            </Tabs>
        );
    }
}
