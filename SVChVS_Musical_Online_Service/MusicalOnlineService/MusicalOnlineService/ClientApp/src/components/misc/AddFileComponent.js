﻿import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export class AddFileComponent extends Component {
    static displayName = AddFileComponent.name;

    constructor(props) {
        super(props);

        this.state = {
            file: ""
        }
    }

    handleFileChange(e) {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.props.handleFile(file);
            this.setState({
                file: file,
            });
        }

        reader.readAsDataURL(file)
    }


    render() {
        return (
            <Form.Group className="mb-3">
                <Form.Control ref={this.props.inputRef} type="file" onChange={(e) => this.handleFileChange(e)} required />
                <Form.Control.Feedback type="invalid">
                    Пожалуйста, загрузите файл
                </Form.Control.Feedback>
            </Form.Group>
        )
    }
}