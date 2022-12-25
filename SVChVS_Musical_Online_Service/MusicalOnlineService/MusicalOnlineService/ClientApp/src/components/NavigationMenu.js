import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export class NavigationMenu extends Component {
    static displayName = NavigationMenu.name;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Музыкальный Сервис</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/Performers">Исполнители</Nav.Link>
                        <Nav.Link href="/Albums">Альбомы</Nav.Link>
                        <Nav.Link href="/Tracks">Треки</Nav.Link>
                        <Nav.Link href="/Add">Добавить</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}