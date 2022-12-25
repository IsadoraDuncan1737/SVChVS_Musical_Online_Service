import React, { Component } from 'react';
import { AddPerformerFormView } from './AddPerformerFormView';

export class AddPerformerForm extends Component {
    static displayName = AddPerformerForm.name;

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            genres: "",
            photoFile: null,
            modalShow: false,
        }

        this.inputRef = React.createRef();

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postPerformer = this.postPerformer.bind(this);
        this.postPhotoFile = this.postPhotoFile.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState() {
        this.setState({
            name: "",
            genres: "",
            photoFile: null,
            modalShow: false,
        });

        this.inputRef.current.value = null;
    }

    render() {
        return (
            <AddPerformerFormView
                handleFile={this.handlePhotoFile}
                handleSubmit={this.handleSubmit}
                name={this.state.name}
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

    handlePhotoFile(file) {
        this.setState({ photoFile: file });
    }

    handleSubmit() {
        event.preventDefault();
        const entity = {
            "Id": "",
            "Name": this.state.name,
            "Genres": this.state.genres,
        }

        const photoFile = new FormData();

        photoFile.append("PerformerName", this.state.name);
        photoFile.append("AlbumTitle", "");
        photoFile.append("File", this.state.photoFile);

        this.postPerformer(entity, photoFile);
    }

    async postPerformer(entity, photoFile) {
        const response = await fetch('performer/create', {
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
