import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import {
    Alert,
    Form,
    Checkbox,
    ControlLabel,
    FormControl,
    FormGroup,
    HelpBlock,
    Col,
    Row,
    Media,
    Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';

class Location extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {

        return (
            <Row  >
                <Row className="Voiture">
                    <Col md={4}>
                        <div className="Card">
                            <Media>
                                <img width={300} height={200} src="https://thumbs.dreamstime.com/b/electric-car-charging-station-isolated-white-background-32945355.jpg" alt="thumbnail" />
                                <Media.Body className="Voiture">
                                    <Media.Heading className="Container-Card">
                                    <p>Marque : Citroên</p>
                                    <p>Modèle : C1</p>
                                    <p>Nb place : 4</p>
                                    <p>Cat. : Citadine</p>
                                    <p>Prix : à partir de 39€/jour pour 100km/j</p>
                                    </Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                        </div>
                    </Col>
                    <Col md={8}>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalStartDate">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Date de début :
                                </Col>
                                <Col sm={3}>
                                    <FormControl type="date" placeholder="Date" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalStartDate">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Heure de début :
                                </Col>
                                <Col sm={3}>
                                    <FormControl type="time" placeholder="Date" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEndDate">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Date de retour :
                                </Col>
                                <Col sm={3}>
                                    <FormControl type="date" placeholder="Date" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEndDate">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Heure de retour :
                                </Col>
                                <Col sm={3}>
                                    <FormControl type="time" placeholder="Date" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <Col componentClass={ControlLabel} sm={3}>
                                    <ControlLabel>Forfait Kilométrique :</ControlLabel>
                                </Col>
                                <Col sm={3}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">1OOkm/Jour</option>
                                        <option value="other">200km/jour</option>
                                    </FormControl>
                                    <HelpBlock>Les kilomètres supplémentaires seront facturés 1€ du kilomètre</HelpBlock>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <Col componentClass={ControlLabel} sm={3}>
                                    <ControlLabel>Agence de retrait :</ControlLabel>
                                </Col>
                                <Col sm={3}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">Agence 1</option>
                                        <option value="other">Agence 2</option>
                                        <option value="other">Agence 3</option>
                                        <option value="other">Agence 4</option>
                                        <option value="other">Agence 5</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <Col componentClass={ControlLabel} sm={3}>
                                    <ControlLabel>Agence de retour :</ControlLabel>
                                </Col>
                                <Col sm={3}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">Agence 1</option>
                                        <option value="other">Agence 2</option>
                                        <option value="other">Agence 3</option>
                                        <option value="other">Agence 4</option>
                                        <option value="other">Agence 5</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalStartDate">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Prix de la location :
                                </Col>
                                <Col sm={3}>
                                    <FormControl type="text" placeholder="Prix de la location" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={3} sm={3}>
                                    <Button type="submit">Valider</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Row>
        );

    }
}

// J'utilise connect() pour liées mon objet Location au store et à mes actions
export default connect()(Location);
