import React from 'react';
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
            <Row className="Container" >
                <Row className="Voiture">
                    <Col md={4}>
                        <div className="Card">
                            <Media>
                                <img width={300} height={200} src="https://sc01.alicdn.com/kf/HTB1evGSIFXXXXbWaXXXq6xXFXXXy/Tailg-Cheap-small-electric-scooter-moped-350W.jpg" alt="thumbnail" />
                                <Media.Body className="Voiture">
                                    <Media.Heading >
                                        <p>TAILG</p>
                                        <p>Prix : à partir de 19€/jour pour 50km/j</p>
                                    </Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                                    <Button bsStyle="primary" className="Voiture">Louer</Button>
                                </Media.Body>
                            </Media>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <Media>
                                <img width={300} height={200} src="http://www.buzzecolo.com/wp-content/uploads/2009/10/yamaha-ec-f.jpg" alt="thumbnail" />
                                <Media.Body>
                                    <Media.Heading>
                                        <p>Yamaha EC-F</p>
                                        <p>Prix : à partir de 29€/jour pour 50km/j</p>
                                    </Media.Heading>
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
                    <Col md={4}>
                        <div>
                            <Media>
                                <img width={300} height={200} src="http://www.automobile-propre.com/wp-content/uploads/2010/11/scooter-bmw-concept-c.jpg" alt="thumbnail" />
                                <Media.Body>
                                    <Media.Heading>
                                        <p>BMW C-EVO</p>
                                        <p>Prix : à partir de 39€/jour pour 50km/j</p>
                                    </Media.Heading>
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
                <Row className="Voiture">
                    <Col md={4}>
                        <div className="Card">
                            <Media>
                                <img width={300} height={200} src="https://sc01.alicdn.com/kf/HTB1evGSIFXXXXbWaXXXq6xXFXXXy/Tailg-Cheap-small-electric-scooter-moped-350W.jpg" alt="thumbnail" />
                                <Media.Body className="Voiture">
                                    <Media.Heading >
                                        <p>TAILG</p>
                                        <p>Prix : à partir de 19€/jour pour 50km/j</p>
                                    </Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                </p>
                                    <Button bsStyle="primary" className="Voiture">Louer</Button>
                                </Media.Body>
                            </Media>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <Media>
                                <img width={300} height={200} src="http://www.buzzecolo.com/wp-content/uploads/2009/10/yamaha-ec-f.jpg" alt="thumbnail" />
                                <Media.Body>
                                    <Media.Heading>
                                        <p>Yamaha EC-F</p>
                                        <p>Prix : à partir de 29€/jour pour 50km/j</p>
                                    </Media.Heading>
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
                    <Col md={4}>
                        <div>
                            <Media>
                                <img width={300} height={200} src="http://www.automobile-propre.com/wp-content/uploads/2010/11/scooter-bmw-concept-c.jpg" alt="thumbnail" />
                                <Media.Body>
                                    <Media.Heading>
                                        <p>BMW C-EVO</p>
                                        <p>Prix : à partir de 39€/jour pour 50km/j</p>
                                    </Media.Heading>
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
            </Row>
        );
    }
}

// J'utilise connect() pour liées mon objet Publications au store et à mes actions
export default connect()(Scooter);
