import React from 'react';
import '../../index.css';
import { Redirect } from 'react-router';
import {
    Alert,
    Button,
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';


async function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    } else {
        throw await response.json();
    }
}

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            success: false,
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            birthday: '',
            address: '',
            phone: null,
            numberDrive: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    registerUser = (event) => {
        event.preventDefault();
        // Notification de mon loading
        this.setState({ loading: true });
        const data = {
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
            birthday: this.state.birthday,
            kiosk: 30,
            validationGroup: 'API'
        };
        // Je fais appel a mon api pour envoyer mes données
        fetch("https://dev.kioskp.com/api/register", {
            method: 'POST',
            accept: 'application/json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(checkStatus)
            .then(response => {
                this.setState({ loading: false, error: null, success: response.message });
            })
            // Je récupère le message d'erreur et j'arrête le loading
            .catch(e => {
                this.setState({ error: e.message, loading: false });
            })
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/' />;
        }

        return (
            <div className="Register">
                <form onSubmit={this.registerUser}>
                    <div>
                        {this.state.loading && <Alert bsStyle="success">Chargement en cours</Alert>}
                        {!!this.state.error && <Alert bsStyle="danger">{this.state.error}</Alert>}
                        {!!this.state.success && <Alert bsStyle="success">{this.state.success}</Alert>}
                    </div>
                    <FormGroup controlId="firstname" bsSize="large">
                        <ControlLabel>Prénom</ControlLabel>
                        <FormControl
                            autoFocus
                            type="firstname"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="lastname" bsSize="large">
                        <ControlLabel>Nom</ControlLabel>
                        <FormControl
                            autoFocus
                            type="lastname"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
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
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                        />
                    </FormGroup>
                    <FormGroup controlId="birthday" bsSize="large">
                        <ControlLabel>Date de naissance</ControlLabel>
                        <FormControl
                            autoFocus
                            type="date"
                            name="birthday"
                            value={this.state.birthday}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="address" bsSize="large">
                        <ControlLabel>Adresse</ControlLabel>
                        <FormControl
                            autoFocus
                            type="firstname"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="phone" bsSize="large">
                        <ControlLabel>Téléphone</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="numberDrive" bsSize="large">
                        <ControlLabel>Numéro de permis</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="numberDrive"
                            value={this.state.numberDrive}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                        value="S'inscrire"
                    >
                        S'inscrire
                    </Button>
                </form>
            </div>
        );
    }
}

