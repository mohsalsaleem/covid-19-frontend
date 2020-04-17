import React from 'react';
import styled from 'styled-components';
import { Container, Card, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    _handleTextInput = (type,event) => {
        this.setState({
            [type] : event.target.value
        });
    }

    render() {
        return (
            <Container style={{ height: '100vh' }}>
                <Home>
                    <LoginCard>
                        <Header>
                            <h2>COVID 19 Tracker</h2>
                        </Header>
                        <Wrapper>
                            <form noValidate autoComplete="off">
                                <LoginField id="userName" label="Username" variant="outlined" onChange={this._handleTextInput.bind(this,'userName')}/>
                                <LoginField id="password" label="Password" variant="outlined" onChange={this._handleTextInput.bind(this,'password')} type="password"/>
                            </form>
                            <Button variant="contained" color="primary" disabled={!this.state.userName || !this.state.password}>
                                Login
                            </Button>
                        </Wrapper>
                        <BottomSpan>
                            <Link to='\auth\register'>
                                Register
                            </Link> | {'  '}
                            <Link to='\auth\registerWorker'>
                                Register as Health Worker
                            </Link>
                        </BottomSpan>
                    </LoginCard>
                </Home>
            </Container>
        );
    }
}



export default Login;

const Home = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const LoginCard = styled.div`
    height: 50%;
    width: 40%;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Header = styled.div`

`;

const Wrapper = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginField = styled(TextField)`
    margin-bottom: 1rem;
`;

const BottomSpan = styled.div`

`;