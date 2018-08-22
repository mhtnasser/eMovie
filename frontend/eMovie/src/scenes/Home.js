import React from 'react';
import '../index.css';
import {
    Alert,
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
                        <h1>E-Movie</h1>
                    </Row>
                    <Row>
                        <h2>Voiture</h2>
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
                    </Row>
                    <Row>
                        <h2>Scooter</h2>

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
                    </Row>
                </Grid>
            </Row>

        );

    }
}
