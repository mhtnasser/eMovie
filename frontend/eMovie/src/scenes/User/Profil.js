import React from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import {
    Alert,
    Button,
    Col,
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap';
import { updateUser } from '../../actions/user';


async function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    } else {
        throw await response.json();
    }
}

class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            success: false,
            email: '',
            firstname: '',
            lastname: '',
            birthDate: null,
            address: '',
            phone: null,
            numberDrive: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        // Notification de mon loading
        this.setState({ loading: true });
        let user = this.props.user;
        let apiKey = 'demo.30@propress.fr';
        if (user) {
            apiKey = user.apikey;
        }
        // Je fais appel a mon api pour recevoir les données
        fetch("https://dev.kioskp.com/api/user/info?api_key=" + apiKey, {
            method: 'GET',
            accept: 'application/json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(checkStatus)
            .then(response => {
                let email = response.email;
                let firstname = response.firstname;
                let lastname = response.lastname;

                this.setState({ loading: false, email, firstname, lastname });

            })
            // Je récupère le message d'erreur et j'arrête le loading
            .catch(e => {
                this.setState({ error: e.message, loading: false });
            })
    };

    updateProfil = (event) => {
        event.preventDefault();
        // Notification de mon loading
        this.setState({ loading: true });
        let user = this.props.user;
        let apiKey = 'demo.30@propress.fr';
        if (user) {
            apiKey = user.apikey;
        }
        const data = {
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            kiosk: 30
        };
        // Je fais appel a mon api pour envoyer mes données
        fetch("https://dev.kioskp.com/api/user/edit?api_key=" + apiKey, {
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

                this.setState({ loading: false, error: null, success: true });
                this.props.updateUser(response);
            })
            // Je récupère le message d'erreur et j'arrête le loading
            .catch(e => {
                this.setState({ error: e.message, loading: false });
            })
    };

    render() {

        return (
            <div className="Profil">
                <Col md={6}>
                    <form onSubmit={this.updateProfil}>
                        <div>
                            {this.state.loading && <Alert bsStyle="success">Chargement en cours</Alert>}
                            {!!this.state.error && <Alert bsStyle="danger">{this.state.error}</Alert>}
                            {this.state.success && <Alert bsStyle="info">Vos modifications ont été enregistrées</Alert>}
                        </div>
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
                        <FormGroup controlId="dateBirth" bsSize="large">
                            <ControlLabel>Date de naissance</ControlLabel>
                            <FormControl
                                autoFocus
                                type="date"
                                name="birthDate"
                                value={this.state.birthDate}
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
                            Modifier
                    </Button>
                    </form>
                </Col>
                <Col md={6}>
                    <div>
                        <h3>Historique de mes locations :</h3>
                        <p>Vous avez éffectué aucune location.</p>
                    </div>
                </Col>
            </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        user: state.user.user
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        updateUser: user => dispatch(updateUser(user))
    }
};

// J'utilise connect() pour liées mon objet Publications au store et à mes actions
export default connect(mapStateToProps, mapDispatchToProps)(Profil);


