import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import '../../stylesheets/popover.css';
import { AddFileComponent } from '../misc/AddFileComponent';

export class AddPerformerFormView extends Component {
    static displayName = AddPerformerFormView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Group>
                    <Form.Label>Имя исполнителя</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Супер исполнитель" value={ this.props.name} onChange={ this.props.handleChangeInput}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Жанры</Form.Label>
                    <Form.Control type="text" name="genres" placeholder="Супер жанры" value={this.props.genres} onChange={ this.props.handleChangeInput} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Фотография исполнителя</Form.Label>
                        <AddFileComponent inputRef={this.inputRef} handleFile={this.props.handleFile}/>
                </Form.Group>
                <Button type="submit">
                    Добавить исполнителя
                    </Button>
                </Form>
                <Modal show={this.props.modalShow}>
                    <Modal.Header>
                        <Modal.Title>Успех</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Исполнитель {this.props.name} был успешно добавлен!</p>
                        <p>Данное окно автоматически закроется через 3 секунды</p>
                    </Modal.Body>
                    </Modal>
                </>
        );
    }
}
