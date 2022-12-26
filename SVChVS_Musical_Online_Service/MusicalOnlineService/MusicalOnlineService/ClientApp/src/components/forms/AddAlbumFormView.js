import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { PerformersTable } from '../tables/PerformersTable';
import Modal from 'react-bootstrap/Modal';

import { AddFileComponent } from '../misc/AddFileComponent';

export class AddAlbumFormView extends Component {
    static displayName = AddAlbumFormView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Название альбома</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Супер альбом" value={this.props.title} onChange={this.props.handleChangeInput} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Исполнитель
                        </Form.Label>
                        <InputGroup>
                            <Form.Control disabled type="text" placeholder={this.props.performer.name} />
                            <OverlayTrigger
                                trigger="click"
                                key="album"
                                show={this.props.performerTableShow}
                                target={this.props.performerTableTarget}
                                placement='auto-start'
                                overlay={
                                    <Popover>
                                        <Popover.Header>Выберите исполнителя</Popover.Header>
                                        <Popover.Body>
                                            <PerformersTable handleChoose={this.props.handleChoosePerformer} />
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Button onClick={this.props.handleClickChoosePerformer}>
                                    Выбрать
                                </Button>
                            </OverlayTrigger>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Жанры</Form.Label>
                        <Form.Control type="text" name="genres" placeholder="Супер жанры" value={this.props.genres} onChange={this.props.handleChangeInput} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Обложка альбома</Form.Label>
                        <AddFileComponent inputRef={this.inputRef} handleFile={this.props.handleFile} />
                    </Form.Group>
                    <Button type="submit">
                        Добавить альбом
                    </Button>
                </Form>
                <Modal show={this.props.modalShow}>
                    <Modal.Header>
                        <Modal.Title>Успех</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Альбом {this.props.title} был успешно добавлен!</p>
                        <p>Данное окно автоматически закроется через 3 секунды</p>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
