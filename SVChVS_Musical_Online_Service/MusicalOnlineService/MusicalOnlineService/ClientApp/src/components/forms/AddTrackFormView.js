import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { AlbumsTable } from '../tables/AlbumsTable';
import { PerformersTable } from '../tables/PerformersTable';
import Modal from 'react-bootstrap/Modal';

import '../../stylesheets/popover.css';
import { AddFileComponent } from '../misc/AddFileComponent';

export class AddTrackFormView extends Component {
    static displayName = AddTrackFormView.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Group>
                    <Form.Label>Название трека</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Супер трек" value={ this.props.title} onChange={ this.props.handleChangeInput}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Исполнитель
                    </Form.Label>
                    <InputGroup>
                        <Form.Control disabled type="text" placeholder={ this.props.performer.name}/>
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
                                        <PerformersTable albumID={this.props.album.id} handleChoose={ this.props.handleChoosePerformer}/>
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
                    <Form.Label>
                        Альбом
                    </Form.Label>
                    <InputGroup>
                        <Form.Control disabled type="text" placeholder={ this.props.album.title} />
                        <OverlayTrigger
                            trigger="click"
                            key="album"
                            show={this.props.albumTableShow}
                                target={this.props.albumTableTarget}
                                placement='auto-start'
                            overlay={
                                <Popover>
                                    <Popover.Header>Выберите альбом</Popover.Header>
                                    <Popover.Body>
                                        <AlbumsTable performerID={this.props.performer.id} handleChoose={ this.props.handleChooseAlbum}/>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                        <Button onClick={ this.props.handleClickChooseAlbum}>
                            Выбрать
                            </Button>
                        </OverlayTrigger>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Жанры</Form.Label>
                    <Form.Control type="text" name="genres" placeholder="Супер жанры" value={this.props.genres} onChange={ this.props.handleChangeInput} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Аудиозапись</Form.Label>
                        <AddFileComponent inputRef={this.props.inputRef} handleFile={this.props.handleFile}/>
                </Form.Group>
                <Button type="submit">
                    Добавить трек
                    </Button>
                </Form>
                <Modal show={this.props.modalShow}>
                    <Modal.Header>
                        <Modal.Title>Успех</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Трек {this.props.title} был успешно добавлен!</p>
                        <p>Данное окно автоматически закроется через 3 секунды</p>
                    </Modal.Body>
                </Modal>
                </>
        );
    }
}
