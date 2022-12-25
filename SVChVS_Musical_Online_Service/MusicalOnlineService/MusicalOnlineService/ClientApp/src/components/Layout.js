import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavigationMenu } from './NavigationMenu';

import '../stylesheets/layout.css'

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavigationMenu />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
