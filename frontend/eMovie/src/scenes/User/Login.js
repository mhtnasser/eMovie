import React from 'react';
import '../../index.css';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {
    Alert,
    Button,
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';
import { connect } from 'react-redux';

import {login} from '../../actions/user';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            email: '',
            password: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // Notification de mon loading
        this.setState({loading: true});
        // Je format mes données pour l'API =>  DATA => PARAMS
        const data = {
            email: this.state.email,
            password: this.state.password,
            kiosk: 30
        };
        this.props.login(data)
        .then(response =>{
            this.setState({redirect: true, isLogged:true, loading:false});
        })
        // Je récupère le message d'erreur et j'arrête le loading
        .catch(e =>{
            this.setState({error: e.message, loading:false});
        })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/'/>;
        }

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        { this.state.loading && <Alert bsStyle="success">Chargement en cours</Alert> }
                        { !!this.state.error && <Alert bsStyle="danger">{this.state.error}</Alert>}
                    </div>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Mot de passe</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                        value="Se connecter"
                    >
                        Se connecter
                    </Button>
                    <br/>
                    <Link to="/forgotten">Mot de passe oublié</Link>
                </form>
            </div>
        );
    }
}


// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        user: state.user
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        login: data => dispatch(login(data))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Login);