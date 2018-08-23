import React from 'react';
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
            <Row className="Container" >
                <Row className="Voiture">
                    <Col md={4}>
                        <div className="Card">
                            <Media>
                                <img width={300} height={200} src="https://thumbs.dreamstime.com/b/electric-car-charging-station-isolated-white-background-32945355.jpg" alt="thumbnail" />
                                <Media.Body className="Voiture">
                                    <Media.Heading >
                                        <p>Citroën C1</p>
                                        <p>Prix : à partir de 39€/jour pour 100km/j</p>
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
                                <img width={300} height={200} src="http://www.lepoint.fr/images/2012/03/07/zoe-522920-jpg_356664_660x281.JPG" alt="thumbnail" />
                                <Media.Body>
                                    <Media.Heading>
                                        <p>Renault Zoé</p>
                                        <p>Prix : à partir de 49€/jour pour 100km/j</p>
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
                                <img width={300} height={200} src="https://www.volkswagen.fr/content/dam/vw-ngw/international-mastersite/showrooms/e-golf-2016/content/highlights/efficiency/GL4816_e-charge.jpg/jcr:content/renditions/original.transform/min/img.jpg" alt="thumbnail" />
                                <Media.Body>
                                    <Media.Heading>
                                        <p>Golf e</p>
                                        <p>Prix : à partir de 59€/jour pour 100km/j</p>
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
                                <img width={300} height={200} src="https://thumbs.dreamstime.com/b/electric-car-charging-station-isolated-white-background-32945355.jpg" alt="thumbnail" />
                                <Media.Body className="Voiture">
                                    <Media.Heading >
                                        <p>Citroën C1</p>
                                        <p>Prix : à partir de 39€/jour pour 100km/j</p>
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
                                <img width={300} height={200} src="http://www.lepoint.fr/images/2012/03/07/zoe-522920-jpg_356664_660x281.JPG" alt="thumbnail" />
                                <Media.Body>
                                    <Media.Heading>
                                        <p>Renault Zoé</p>
                                        <p>Prix : à partir de 49€/jour pour 100km/j</p>
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
                                <img width={300} height={200} src="https://www.volkswagen.fr/content/dam/vw-ngw/international-mastersite/showrooms/e-golf-2016/content/highlights/efficiency/GL4816_e-charge.jpg/jcr:content/renditions/original.transform/min/img.jpg" alt="thumbnail" />
                                <Media.Body>
                                    <Media.Heading>
                                        <p>Golf e</p>
                                        <p>Prix : à partir de 59€/jour pour 100km/j</p>
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
export default connect()(Voiture);
