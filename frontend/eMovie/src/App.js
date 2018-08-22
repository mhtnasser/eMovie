import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
} from 'react-bootstrap';
import { connect } from 'react-redux';

import Home from './scenes/Home';
import Voiture from './scenes/Voiture';
import Scooter from './scenes/Scooter';
import Login from './scenes/User/Login';
import Register from './scenes/User/Register';
import Forgotten from './scenes/User/Forgotten';
import Profil from './scenes/User/Profil';

import {logout} from './actions/user';

class App extends React.Component {

    logout() {
        this.props.logoutUser();
    };

    render() {

        // console.dir("this.prop",this.props);
        const {isAuth, user} =  this.props;
        let userMenu = [];
        // console.log(isAuth);
        if (isAuth){
            userMenu.push(<NavItem key={"profil"} eventKey={1} href="/profil">Bonjour { user.firstname }</NavItem>);
            userMenu.push(<NavItem key={"/"} eventKey={1} href="/" onClick={() => this.logout()} >Se déconnecter</NavItem>);
        }else{
            userMenu.push(<NavItem key={"/login"} eventKey={1} href="/login">Se connecter</NavItem>);
            userMenu.push(<NavItem key={"/register"} eventKey={1} href="/register">S'inscrire</NavItem>);
        }

        // console.dir("monuser", this.props.user);
        return (
            <Router>
                <div>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">E-Movie</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown eventKey={3} title="Véhicule" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1} href="/voiture">Voiture</MenuItem>
                                    <MenuItem eventKey={3.2} href="/scooter">Scooter</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                { userMenu }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route exact path="/" component={Home}/>
                    <Route path="/voiture" component={Voiture}/>
                    <Route path="/scooter" component={Scooter}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/forgotten" component={Forgotten}/>
                    <Route path="/profil" component={Profil}/>
                </div>
            </Router>
        )
    }

}

// Maps state from store to props => Je prends l'état de mes objets dans mon store et les passes à mon objet App => REDUCERS
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        isAuth: !!state.user.user
    }
};

// Maps actions to props => Je prends l'état de mon objet App et l'envoi à mon store => ACTIONS
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logout())
    }
};

// J'utilise connect() pour liées mon objet App au store et à mes actions
export default connect(mapStateToProps, mapDispatchToProps)(App);
