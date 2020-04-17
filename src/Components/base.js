import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from '@material-ui/core';
class PrimaryLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _handleLogOut = () => {
        localStorage.clear(); 
        this.props.history.push('/auth/login');
    }

    render() {
        return (
            <Header>
                <div>
                    <h2>
                        COVID TRACKER
                    </h2>
                </div>
                <div>
                    <Button onClick={this._handleLogOut}>Log Out</Button>
                </div>
            </Header>
        );
    }
}

export default PrimaryLayout;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 1rem;
    align-items: center;
`;