import React from 'react';
import styled from 'styled-components';
import { Container, TextField, Button, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { GATEWAY_URL } from '../../constants';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            loading: false
        };
    }

    _handleTextInput = (type, event) => {
        this.setState({
            [type]: event.target.value
        });
    }

    _handleLogin = () => {
        var url = `${GATEWAY_URL}api/authenticate`;
        var request = {
            "password": this.state.password,
            "rememberMe": true,
            "username": this.state.userName
        }
        this.setState({
            loading: true
        });
        // this.props.history.push('/');
        axios.post(url, request, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status === 200) {
                const token = response.data.id_token;
                token && localStorage.setItem(`token`, token);
                this.getUserId();
            }
        }).catch(error => {
            console.warn(error);
        });
    }

    getUserId = () => {
        var url = `${GATEWAY_URL}api/account`;
        axios.get(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            if (response.status === 200) {
                var id = response.data.id;
                id && localStorage.setItem(`userId`, id);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            }
        }).catch(error => {
            console.log(error)
        })

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
                            <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                                <LoginField id="userName" label="Username" variant="outlined" onChange={this._handleTextInput.bind(this, 'userName')} />
                                <LoginField id="password" label="Password" variant="outlined" onChange={this._handleTextInput.bind(this, 'password')} type="password" />
                            </form>
                            {!this.state.loading ? <Button
                                variant="contained"
                                color="primary"
                                disabled={!this.state.userName || !this.state.password}
                                onClick={this._handleLogin}
                            >
                                Login
                            </Button> :
                            <CircularProgress />}
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