import React from 'react';
import styled from 'styled-components';
import { Container, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { GATEWAY_URL } from '../../constants';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            age: ''
        };
    }

    _handleTextInput = (type, event) => {
        this.setState({
            [type]: event.target.value
        });
    }

    _handleRegister = () => {
        let url = `${GATEWAY_URL}api/patient/register`;
        var request = {
            "email": this.state.email,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "login": this.state.userName,
            "password": this.state.password,
            "phone": this.state.phone,
            "age": this.state.age
        }
        fetch(url, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify(request)
        })
        .then((response) => {
            if(response.status === 201)
            {
                this.props.history.push('login');
            }
        },
        (error) => {
            console.warn(error);
        });
    }

    render() {
        return (
            <Container style={{ height: '100vh' }}>
                <Home>
                    <LoginCard>
                        <Header>
                            <h2>COVID 19 Tracker</h2>
                            <span>Register to update health status</span>
                        </Header>
                        <Wrapper>
                            <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                                <LoginField id="userName" label="Username" variant="outlined" onChange={this._handleTextInput.bind(this, 'userName')} />
                                <LoginField id="password" label="Password" variant="outlined" onChange={this._handleTextInput.bind(this, 'password')} type="password" />
                                <LoginField id="firstname" label="First Name" variant="outlined" onChange={this._handleTextInput.bind(this, 'firstName')} />
                                <LoginField id="lastname" label="Last Name" variant="outlined" onChange={this._handleTextInput.bind(this, 'lastName')} />
                                <LoginField id="email" label="Email" variant="outlined" onChange={this._handleTextInput.bind(this, 'email')} />
                                <LoginField id="phone" label="Phone" variant="outlined" onChange={this._handleTextInput.bind(this, 'phone')} />
                                <LoginField id="age" label="Age" variant="outlined" type="number" onChange={this._handleTextInput.bind(this, 'age')} />
                            </form>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={!this.state.userName || !this.state.password || !this.state.email || !this.state.phone || !this.state.age}
                                onClick={this._handleRegister}
                            >
                                Register
                            </Button>
                        </Wrapper>
                        <BottomSpan>
                            Already registered {" "}
                            <Link to='login'>
                                Login
                            </Link>
                        </BottomSpan>
                    </LoginCard>
                </Home>
            </Container>
        );
    }
}



export default Register;

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
    height: 90%;
    width: 60%;
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