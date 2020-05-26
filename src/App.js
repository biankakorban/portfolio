import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";
import BgImage from "./assets/image-bg.jpg";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const styles = {
  backgroundImage: `url(${BgImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bianka Korban",
      headerLinks: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Contact",
          path: "/contact",
        },
      ],
      home: {
        title: "Keep it up",
        subtitle: "Something about me and my work",
        text: "Check out my projects below. I am building my portfolio ...",
      },
      about: {
        title: "About me",
      },
      contact: {
        title: "What if you want to contact me ...?",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0 app-container" fluid={true} style={styles}>
          <div className="content-wrap">
            <Navbar
              className="border-bottom border-dark"
              bg="transparent"
              expand="lg"
            >
              <Navbar.Brand>Bianka Korban</Navbar.Brand>

              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subtitle={this.state.home.subtitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/about"
              render={() => <AboutPage title={this.state.about.title} />}
            />
            <Route
              path="/contact"
              render={() => <ContactPage title={this.state.contact.title} />}
            />
          </div>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
