import React from "react";

import Card from "../components/Card";

import linkedInImage from "../assets/profile_image.png";
import githubImage from "../assets/github6.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "LinkedIn Profile",
          subtitle: "If you want to read about me",
          imgSrc: linkedInImage,
          link: "https://www.linkedin.com/in/bianka-korban-861799138/",
          selected: false,
        },
        {
          id: 1,
          title: "Github Profile",
          subtitle: "If you want to check my projects",
          imgSrc: githubImage,
          link: "https://github.com/biankakorban",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
