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

class Scooter extends React.Component {

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
                <h1>Scooter :</h1>
                <Col md={12}>
                <div>
                        <Media>
                            <Media.Left>
                                <img width={120} height={120} src="https://sc01.alicdn.com/kf/HTB1evGSIFXXXXbWaXXXq6xXFXXXy/Tailg-Cheap-small-electric-scooter-moped-350W.jpg" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>TAILG</Media.Heading>
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
                                <img width={120} height={120} src="http://www.buzzecolo.com/wp-content/uploads/2009/10/yamaha-ec-f.jpg" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Yamaha EC-F</Media.Heading>
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
                                <img width={120} height={120} src="https://sc01.alicdn.com/kf/HTB1evGSIFXXXXbWaXXXq6xXFXXXy/Tailg-Cheap-small-electric-scooter-moped-350W.jpg" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>TAILG</Media.Heading>
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
                                <img width={120} height={120} src="http://www.buzzecolo.com/wp-content/uploads/2009/10/yamaha-ec-f.jpg" alt="thumbnail" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>Yamaha EC-F</Media.Heading>
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
export default connect()(Scooter);
