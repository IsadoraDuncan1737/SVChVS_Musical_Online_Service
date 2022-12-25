import React, { Component } from 'react';
import { AddAlbumFormView } from './AddAlbumFormView';

export class AddAlbumForm extends Component {
    static displayName = AddAlbumForm.name;

    constructor(props) {
        super(props);

        this.state = {
            performer: {},
            title: "",
            genres: "",
            performerTableShow: false,
            performerTableTarget: null,
            photoFile: null,
            modalShow: false,
        }

        this.inputRef = React.createRef();

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleClickChoosePerformer = this.handleClickChoosePerformer.bind(this);
        this.handleChoosePerformer = this.handleChoosePerformer.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postAlbum = this.postAlbum.bind(this);
        this.postPhotoFile = this.postPhotoFile.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState() {
        this.setState({
            peformer: {},
            title: "",
            genres: "",
            performerTableShow: false,
            performerTableTarget: null,
            photoFile: null,
            modalShow: false,
        });

        this.inputRef.current.value = null;
    }

    render() {
        return (
            <AddAlbumFormView
                performer={this.state.performer}
                performerTableShow={this.state.performerTableShow}
                performerTableTarget={this.state.performerTableTarget}
                handleClickChoosePerformer={this.handleClickChoosePerformer}
                handleChoosePerformer={this.handleChoosePerformer}
                handleFile={this.handlePhotoFile}
                handleSubmit={this.handleSubmit}
                title={this.state.title}
                genres={this.state.genres}
                handleChangeInput={this.handleChangeInput}
                modalShow={this.state.modalShow}
                file={this.state.photoFile}
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

    handleChoosePerformer(choosedPerformer) {
        this.setState({ performer: choosedPerformer });
        this.handleClickChoosePerformer();
    }

    handlePhotoFile(file) {
        this.setState({ photoFile: file });
    }

    handleSubmit() {
        event.preventDefault();
        const entity = {
            "Id": "",
            "PerformerId": this.state.performer.id,
            "Title": this.state.title,
            "Genres": this.state.genres,
            "PerformerName": this.state.performer.name,
        }

        const photoFile = new FormData();

        photoFile.append("PerformerName", this.state.performer.name);
        photoFile.append("AlbumTitle", this.state.title);
        photoFile.append("File", this.state.photoFile);

        this.postAlbum(entity, photoFile);
    }

    async postAlbum(entity, photoFile) {
        const response = await fetch('album/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entity)
        });

        const data = await response.json();

        data === ""
            ? console.log(data)
            : this.postPhotoFile(photoFile);
    }

    async postPhotoFile(photoFile) {
        const response = await fetch('photo/create', {
            method: 'POST',
            body: photoFile
        })

        this.setState({ modalShow: true });

        setTimeout(() => { this.resetState() }, "3000");
    }
}
