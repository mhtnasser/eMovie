import React from 'react';
import '../../index.css';
import {
    Alert,
    Button,
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';


async function checkStatus (response) {
    if (response.status >= 200 && response.status <300) {
        return  response.json();
    } else {
        throw  await response.json();
    }
}

export default class Forgotten extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            success: null,
            error: null,
            email: ''
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
        // Je fais appel a mon api pour récupérer mes données
        const data = {
            email: this.state.email,
            kiosk: 30
        };
        fetch("https://dev.kioskp.com/api/password/request", {
            method: 'POST',
            accept:'application/json',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(checkStatus)
        .then(response =>{
            this.setState({loading:false, success:response.message});
        })
        // Je récupère le message d'erreur et j'arrête le loading
        .catch(e =>{
            this.setState({error: e.message, loading:false});
        })
    }

    render() {
        return (
            <div className="Forgotten">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        { this.state.loading && <Alert bsStyle="success">Chargement en cours</Alert> }
                        { !!this.state.error && <Alert bsStyle="danger">{this.state.error}</Alert>}
                        { !!this.state.success && <Alert bsStyle="success">{this.state.success}</Alert> }
                    </div>
                    <div>
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
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                        value="Valider"
                    >
                        Valider
                    </Button>
                </form>
            </div>
        );
    }
}

