import React from 'react';
import '../index.css';
import {
    Alert,
    Carousel,
    Col,
    Grid,
    Row,
    Media,
    Button,
} from 'react-bootstrap';



export default class Home extends React.Component {

    // Je déclare mes objets et les initialises grâce à this.state
    constructor() {
        super();
        this.state = {
            loading: false,
            items: [],
            error: null,
        };
    }

    render() {

        return (

            <Row>
                <Grid>
                    <Row className="kiosque">
                        {this.state.loading && <Alert bsStyle="success">Chargement en cours</Alert>}
                        {!!this.state.error &&
                            <Alert bsStyle="danger">
                                {this.state.error}
                            </Alert>
                        }
                    </Row>
                    <Row className="Carroussel">
                        <Carousel>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://thumbs.dreamstime.com/b/electric-car-charging-station-isolated-white-background-32945355.jpg" />
                                <Carousel.Caption>
                                    <h3>Citroën C1</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="http://www.buzzecolo.com/wp-content/uploads/2009/10/yamaha-ec-f.jpg" />
                                <Carousel.Caption>
                                    <h3>Yamaha EC-F</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width={900} height={500} alt="900x500" src="https://www.larevueautomobile.com//fiche-technique/photos/2015/Volkswagen/Golf/GTE/Volkswagen_Golf_GTE_001.jpg" />
                                <Carousel.Caption>
                                    <h3>Golf E</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    <Row>
                        <Row className="Container" >
                            <h1>Voiture :</h1>
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
                    </Row>
                    <Row>
                        <h1>Scooter :</h1>
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
                </Grid>
            </Row>

        );

    }
}
