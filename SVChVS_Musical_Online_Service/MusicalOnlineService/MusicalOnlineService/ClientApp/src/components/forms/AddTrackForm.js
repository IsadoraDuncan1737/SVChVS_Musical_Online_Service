import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { AddTrackFormView } from './AddTrackFormView';

export class AddTrackForm extends Component {
    static displayName = AddTrackForm.name;

    constructor(props) {
        super(props);

        this.state = {
            album: {},
            performer: {},
            title: "",
            genres: "",
            performerTableShow: false,
            performerTableTarget: null,
            albumTableShow: false,
            albumTableTarget: null,
            audioFile: null,
            modalShow: false,
        }

        this.inputRef = React.createRef();

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleClickChoosePerformer = this.handleClickChoosePerformer.bind(this);
        this.handleClickChooseAlbum = this.handleClickChooseAlbum.bind(this);
        this.handleChoosePerformer = this.handleChoosePerformer.bind(this);
        this.handleChooseAlbum = this.handleChooseAlbum.bind(this);
        this.handleAudioFile = this.handleAudioFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postTrack = this.postTrack.bind(this);
        this.postAudioFile = this.postAudioFile.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState() {
        this.setState({
            album: {},
            performer: {},
            title: "",
            genres: "",
            performerTableShow: false,
            performerTableTarget: null,
            albumTableShow: false,
            albumTableTarget: null,
            audioFile: null,
            modalShow: false,
        });

        this.inputRef.current.value = "";
    }

    render() {
        return (
            <AddTrackFormView
                performer={this.state.performer}
                performerTableShow={this.state.performerTableShow}
                performerTableTarget={this.state.performerTableTarget}
                handleClickChoosePerformer={this.handleClickChoosePerformer}
                handleChoosePerformer={this.handleChoosePerformer}
                album={this.state.album}
                albumTableShow={this.state.albumTableShow}
                albumTableTarget={this.state.albumTableTarget}
                handleClickChooseAlbum={this.handleClickChooseAlbum}
                handleChooseAlbum={this.handleChooseAlbum}
                handleFile={this.handleAudioFile}
                handleSubmit={this.handleSubmit}
                title={this.state.title}
                genres={this.state.genres}
                handleChangeInput={this.handleChangeInput}
                modalShow={this.state.modalShow}
                inputRef={this.inputRef}
            />
        );
    }

    handleChangeInput() {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClickChoosePerformer() {
        this.setState({ performerTableShow: !this.state.performerTableShow, performerTableTarget: event.target });
    }

    handleClickChooseAlbum() {
        this.setState({ albumTableShow: !this.state.albumTableShow, albumTableTarget: event.target });
    }

    handleChooseAlbum(choosedAlbum) {
        this.setState({ album: choosedAlbum });
        this.handleClickChooseAlbum();
    }

    handleChoosePerformer(choosedPerformer) {
        this.setState({ performer: choosedPerformer });
        this.handleClickChoosePerformer();
    }

    handleAudioFile(file) {
        this.setState({ audioFile: file });
    }

    handleSubmit() {
        event.preventDefault();
        const entity = {
            "Id": "",
            "PerformerId": this.state.performer.id,
            "AlbumId": this.state.album.id,
            "Title": this.state.title,
            "Genres": this.state.genres,
            "PerformerName": this.state.performer.name,
            "AlbumTitle": this.state.album.title
        }

        const audioFile = new FormData();

        audioFile.append("PerformerName", this.state.performer.name);
        audioFile.append("AlbumTitle", this.state.album.title);
        audioFile.append("TrackTitle", this.state.title);
        audioFile.append("File", this.state.audioFile);

        this.postTrack(entity, audioFile);
    }

    async postTrack(entity, audioFile) {
        const response = await fetch('track/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entity)
        });

        const data = await response.json();

        data === ""
            ? console.log(data)
            : this.postAudioFile(audioFile);
    }

    async postAudioFile(audioFile) {
        const response = await fetch('audio/create', {
            method: 'POST',
            body: audioFile
        })

        this.setState({ modalShow: true });

        setTimeout(() => { this.resetState() }, "3000");
    }
}
