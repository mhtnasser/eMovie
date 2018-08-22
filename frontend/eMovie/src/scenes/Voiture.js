import React from 'react';
import _ from 'lodash';
import '../index.css';
import {
    Col,
    Row,
    Media,
    Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';

class Voiture extends React.Component {

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
            <Row>
                <h1>Voiture :</h1>
                <Col md={12}>
                    <div>
                        <Media>
                            <Media.Left>
                                <img width={120} height={120} src="https://thumbs.dreamstime.com/b/electric-car-charging-station-isolated-white-background-32945355.jpg" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Citroën C1</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                                <Button bsStyle="primary">Louer</Button>
                            </Media.Body>
                        </Media>
                        <Media>
                            <Media.Left>
                                <img width={120} height={120} src="http://www.lepoint.fr/images/2012/03/07/zoe-522920-jpg_356664_660x281.JPG" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Renault Zoé</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                                <Button bsStyle="primary">Louer</Button>
                            </Media.Body>
                        </Media>
                        <Media>
                            <Media.Left>
                                <img width={120} height={120} src="https://thumbs.dreamstime.com/b/electric-car-charging-station-isolated-white-background-32945355.jpg" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Citroën C1</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                                <Button bsStyle="primary">Louer</Button>
                            </Media.Body>
                        </Media>
                        <Media>
                            <Media.Left>
                                <img width={120} height={120} src="http://www.lepoint.fr/images/2012/03/07/zoe-522920-jpg_356664_660x281.JPG" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Renault Zoé</Media.Heading>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                                <Button bsStyle="primary">Louer</Button>
                            </Media.Body>
                        </Media>
                    </div>
                </Col>
            </Row>
        );

    }
}

// J'utilise connect() pour liées mon objet Publications au store et à mes actions
export default connect()(Voiture);
